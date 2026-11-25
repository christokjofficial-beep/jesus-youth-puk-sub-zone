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
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const el = frame.current;
      const scroller = document.querySelector<HTMLElement>(".scroll-container");
      const sky = document.querySelector<HTMLElement>(".js-section-sky");
      const water = document.querySelector<HTMLElement>(".js-section-underwater");
      if (!el || !scroller || !sky || !water) return;
      const vh = window.innerHeight;
      const start = sky.offsetTop - 0.9 * vh; // clouds roll in over the end of the statue scene
      const end = water.offsetTop + 4.3 * vh; // engine finishes its own surface-to-underwater move by ~4.4 vh; hold the deep until then
      const q = Math.min(1, Math.max(0, (scroller.scrollTop - start) / (end - start)));
      const opacity = smooth(0, 0.03, q) * (1 - smooth(0.965, 1, q));
      el.style.opacity = String(opacity);
      el.style.visibility = opacity > 0.001 ? "visible" : "hidden";
      // While the dove scene fully covers the screen, the engine underneath skips drawing (see js-25cd474e.js)
      (window as unknown as { __jyPauseEngine?: boolean }).__jyPauseEngine = opacity >= 0.999;
      // Scene timing in pixels: the descent keeps its length; once the dove rests above Jesus there is only a
      // short hold, then the dive starts as the engine reaches the water.
      const s = scroller.scrollTop - start;
      // dove rests above Jesus at p≈0.52 → ~11 vh into the scene; the sky section (shortened in globals.css) ends ~2 vh later
      const doveP = Math.min(1, Math.max(0, (s - 1.6 * vh) / (18 * vh)));
      const waterAt = water.offsetTop - start;
      const dive = smooth(waterAt - 0.6 * vh, end - start, s);
      el.contentWindow?.postMessage({ doveP: q, p: doveP, dive, on: opacity > 0.001 }, window.location.origin);
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
