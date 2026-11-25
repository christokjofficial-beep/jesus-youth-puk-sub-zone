"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Plays the dove scene (public/dove-scene.html) over the homepage's sky section.
 * Flow: statue scene -> full cloud screen -> dove descends onto Jesus -> camera dives underwater -> engine's underwater scene.
 * The engine keeps running underneath; this layer only covers the sky section's scroll range.
 */
export default function DoveSkyOverlay() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [mounted, setMounted] = useState(false);

  // Load after the engine has had a head start (the scene is ~30 MB)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let raf = 0;
    const smooth = (a: number, b: number, x: number) => {
      const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    };
    // The dive runs on its own clock: at the end of the sky section the engine locks scrolling and jumps into the
    // underwater section by itself (~1.2 s), so a scroll-driven dive got squeezed into that jump and looked like a cut.
    let dive = -1;
    let last = performance.now();
    const DIVE_S = 1.8;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const now = performance.now();
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      const el = frame.current;
      const scroller = document.querySelector<HTMLElement>(".scroll-container");
      const sky = document.querySelector<HTMLElement>(".js-section-sky");
      const water = document.querySelector<HTMLElement>(".js-section-underwater");
      if (!el || !scroller || !sky || !water) return;
      const vh = window.innerHeight;
      const start = sky.offsetTop - 1.4 * vh; // clouds roll in slowly over the end of the statue scene
      const end = water.offsetTop + 0.08 * water.offsetHeight; // where the engine's jump lands
      const q = Math.min(1, Math.max(0, (scroller.scrollTop - start) / (end - start)));
      // The engine starts its jump once the sky section's bottom reaches the bottom of the screen
      const diving = scroller.scrollTop > water.offsetTop - 1.05 * vh;
      if (dive < 0) dive = diving ? 1 : 0; // page opened past the dive: no replay
      dive = Math.min(1, Math.max(0, dive + (diving ? 1 : -1) * (dt / DIVE_S)));
      // Reveal the engine's underwater scene only after the camera is fully under (its jump is done by then)
      const opacity = smooth(0, 0.07, q) * (1 - smooth(0.8, 1, dive));
      el.style.opacity = String(opacity);
      el.style.visibility = opacity > 0.001 ? "visible" : "hidden";
      // While the dove scene fully covers the screen, the engine underneath skips drawing (see js-25cd474e.js)
      (window as unknown as { __jyPauseEngine?: boolean }).__jyPauseEngine = opacity >= 0.999;
      // Timing as a share of the real sky section (2500px base on phones, 5000px on desktop), so the dove always
      // lands before the dive: it leaves the cloud once the cloud layer has faded in, rests above Jesus (p≈0.52) at 65%, then the dive.
      const s = scroller.scrollTop - start;
      const waterAt = water.offsetTop - start;
      const doveP = Math.min(1, Math.max(0, (0.52 * (s - 0.09 * waterAt)) / (0.56 * waterAt)));
      el.contentWindow?.postMessage({ doveP: q, p: doveP, dive: smooth(0, 1, dive), on: opacity > 0.001 }, window.location.origin);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      (window as unknown as { __jyPauseEngine?: boolean }).__jyPauseEngine = false;
    };
  }, [mounted]);

  if (!mounted) return null;
  return (
    <iframe
      ref={frame}
      src="/dove-scene.html?embed"
      title="The Holy Spirit descends as a dove onto Jesus"
      aria-hidden="true"
      tabIndex={-1}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
        zIndex: 2,
        pointerEvents: "none",
        opacity: 0,
        visibility: "hidden",
        background: "transparent",
      }}
    />
  );
}
