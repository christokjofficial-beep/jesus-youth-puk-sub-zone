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
    // The visitor's scroll drives the dive. The engine switches sky -> underwater at 90% of the sky section and
    // (patched in js-25cd474e.js) jumps instantly to its landing point; that jump happens while this layer fully
    // covers the screen, and the engine's own 1.2 s scene blend plays underneath before we reveal it.
    let landedFor = 0;
    let last = performance.now();
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
      const y = scroller.scrollTop;
      const start = sky.offsetTop - 1.4 * vh; // clouds roll in slowly over the end of the statue scene
      const trigger = sky.offsetTop + 0.9 * (sky.offsetHeight - vh); // engine's sky -> underwater switch
      const land = water.offsetTop + 0.085 * water.offsetHeight; // where the engine's jump lands
      const diveFrom = trigger - 1.6 * vh;
      const q = Math.min(1, Math.max(0, (y - start) / (land - start)));
      // camera sinks as you scroll the last stretch of the Jesus scene; fully under when the engine switches
      const dive = y >= trigger ? 1 : smooth(diveFrom, trigger - 0.05 * vh, y);
      landedFor = y >= land - 2 ? landedFor + dt : 0;
      // after landing: scrolling reveals the underwater scene, but never before the engine's blend has finished
      const reveal = Math.min(smooth(land, land + 0.5 * vh, y + 0.15 * vh), smooth(0.9, 1.3, landedFor));
      const opacity = smooth(0, 0.07, q) * (1 - reveal);
      el.style.opacity = String(opacity);
      el.style.visibility = opacity > 0.001 ? "visible" : "hidden";
      // While the dove scene fully covers the screen, the engine underneath skips drawing (see js-25cd474e.js)
      (window as unknown as { __jyPauseEngine?: boolean }).__jyPauseEngine = opacity >= 0.999;
      // Dove timing as a share of the scroll before the dive (sky section is 2500px base on phones, 5000px on
      // desktop): it leaves the cloud once the cloud layer has faded in and rests above Jesus (p≈0.52) at ~85%.
      const s = y - start;
      const span = diveFrom - start;
      const doveP = Math.min(1, Math.max(0, (0.52 * (s - 0.09 * span)) / (0.76 * span)));
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
