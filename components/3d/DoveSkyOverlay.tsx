"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Plays the dove scene (public/dove-scene.html) over the homepage's sky section.
 * Flow: statue scene -> clouds roll in -> dove descends onto Jesus -> the camera comes down to the river ->
 * a waterline rises over the screen into the engine's underwater scene, which starts just under that same surface.
 * Everything visible is driven by the visitor's scroll; the engine's scene switches (patched to be instant in
 * public/build/js-25cd474e.js) always happen while this layer fully covers the screen.
 */

// Must match the engine patch in public/build/js-25cd474e.js:
export const STATUE_SWITCH = 0.76; // statue (space) scene toNextThreshold (its progress is clamped at .78): switch to the sky
const SKY_LANDING = 0.12; // statue -> sky transition toPrevThreshold: where that switch lands in the sky section
const UNDERWATER_LANDING = 0.006; // sky -> underwater transition toPrevThreshold: just under the water surface
const WAVE_W = 600; // px per tile of the waterline

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
// One wavy waterline shared by the mask and the highlight so they line up exactly
const wavePoints = (y0: number, amp: number) => {
  const pts: string[] = [];
  // two wave lengths that both tile WAVE_W, so the line looks like water rather than a regular zigzag
  const w = (x: number) => 0.62 * Math.sin((4 * Math.PI * x) / WAVE_W) + 0.38 * Math.sin((6 * Math.PI * x) / WAVE_W + 1.3);
  for (let x = -100; x <= WAVE_W + 100; x += 5) pts.push(`${x},${(y0 - amp * w(x)).toFixed(2)}`);
  return pts.join(" ");
};
const svgUrl = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
// Opaque above the waterline (the dove scene stays visible), transparent below it (the engine shows through)
const maskImage = (h: number, amp: number) =>
  svgUrl(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${WAVE_W}" height="${3 * h}" viewBox="0 0 ${WAVE_W} ${3 * h}">` +
      `<filter id="f" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.2"/></filter>` +
      `<polygon filter="url(#f)" fill="#000" points="${wavePoints(1.5 * h, amp)} ${WAVE_W + 100},-100 -100,-100"/></svg>`,
  );
const lineImage = (amp: number) => {
  const pts = wavePoints(20, amp);
  return svgUrl(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${WAVE_W}" height="40" viewBox="0 0 ${WAVE_W} 40">` +
      `<polyline points="${pts}" fill="none" stroke="#efe2ff" stroke-opacity=".3" stroke-width="7"/>` +
      `<polyline points="${pts}" fill="none" stroke="#fffaff" stroke-opacity=".95" stroke-width="1.6"/></svg>`,
  );
};

export default function DoveSkyOverlay() {
  const frame = useRef<HTMLIFrameElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Load after the engine has had a head start (the scene is ~30 MB)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let raf = 0;
    let maskFor = 0;
    let mask = "";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const engine = window as unknown as { __jyPauseEngine?: boolean };
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const el = frame.current;
      const scroller = document.querySelector<HTMLElement>(".scroll-container");
      const statue = document.querySelector<HTMLElement>(".js-section-space");
      const sky = document.querySelector<HTMLElement>(".js-section-sky");
      const water = document.querySelector<HTMLElement>(".js-section-underwater");
      if (!el || !line.current || !glow.current || !scroller || !statue || !sky || !water) return;
      const vh = window.innerHeight;
      const y = scroller.scrollTop;
      // Clouds roll in over the last stretch of the statue scene and fully cover it before the engine switches to
      // the sky (instantly, landing at skyLand); the dove leaves the cloud from there.
      const statueSwitch = statue.offsetTop + STATUE_SWITCH * (statue.offsetHeight - vh);
      const skyLand = sky.offsetTop + SKY_LANDING * sky.offsetHeight;
      const trigger = sky.offsetTop + 0.9 * (sky.offsetHeight - vh); // engine's sky -> underwater switch
      const land = water.offsetTop + UNDERWATER_LANDING * water.offsetHeight; // where that switch lands
      const diveFrom = trigger - 1.6 * vh;
      const fade = smooth(statueSwitch - 0.7 * vh, statueSwitch - 0.03 * vh, y);
      // The camera comes down to the river over the last stretch of the Jesus scene. The engine then switches to its
      // underwater scene and jumps the page to `land` (hidden: this layer still covers everything), and scrolling on
      // raises the waterline. It moves linearly with the scroll, so it follows the visitor's finger.
      const dive = y >= trigger ? 1 : smooth(diveFrom, trigger - 0.05 * vh, y);
      const wipe = y < land ? 0 : Math.min(1, (y - land) / (0.75 * vh));
      const opacity = fade;
      const shown = opacity > 0.001 && wipe < 1;
      el.style.opacity = String(opacity);
      el.style.visibility = shown ? "visible" : "hidden";

      if (maskFor !== vh) {
        maskFor = vh;
        const amp = Math.max(5, vh * 0.009);
        mask = maskImage(vh, amp);
        line.current.style.backgroundImage = lineImage(amp);
      }
      const crossing = wipe > 0 && wipe < 1;
      if (crossing) {
        const wy = vh + 40 - wipe * (vh + 80); // from just below the bottom edge to just above the top
        const phase = reduce ? 0 : ((performance.now() / 1000) * 26) % WAVE_W; // the waves drift sideways
        el.style.setProperty("-webkit-mask-image", mask);
        el.style.setProperty("mask-image", mask);
        el.style.setProperty("-webkit-mask-size", `${WAVE_W}px ${3 * vh}px`);
        el.style.setProperty("mask-size", `${WAVE_W}px ${3 * vh}px`);
        el.style.setProperty("-webkit-mask-repeat", "repeat-x");
        el.style.setProperty("mask-repeat", "repeat-x");
        el.style.setProperty("-webkit-mask-position", `${phase}px ${wy - 1.5 * vh}px`);
        el.style.setProperty("mask-position", `${phase}px ${wy - 1.5 * vh}px`);
        line.current.style.transform = `translate3d(0,${wy - 20}px,0)`;
        line.current.style.backgroundPosition = `${phase}px 0`;
        glow.current.style.transform = `translate3d(0,${wy}px,0)`;
      } else {
        el.style.setProperty("-webkit-mask-image", "none");
        el.style.setProperty("mask-image", "none");
      }
      line.current.style.visibility = glow.current.style.visibility = crossing ? "visible" : "hidden";

      // The engine skips drawing only while the Jesus scene fully covers it; from the switch on it renders the
      // underwater scene underneath so the waterline has something to reveal
      engine.__jyPauseEngine = opacity >= 0.999 && y < trigger;
      // Dove timing as a share of the scroll from the sky landing to the dive (the sky section is 2500px base on
      // phones, 5000px on desktop): it breaks out of the cloud at once and rests above Jesus (p≈0.52) at 85%.
      const span = diveFrom - skyLand;
      const doveP = y < skyLand ? 0 : Math.min(1, Math.max(0, (0.52 * (y - skyLand)) / (0.85 * span)));
      el.contentWindow?.postMessage({ fade, p: doveP, dive, sink: wipe, on: shown }, window.location.origin);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      engine.__jyPauseEngine = false;
    };
  }, [mounted]);

  if (!mounted) return null;
  return (
    <>
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
      {/* The waterline: a bright, gently moving edge, with the light of the surface just under it */}
      <div
        ref={glow}
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          height: "22vh",
          zIndex: 3,
          pointerEvents: "none",
          visibility: "hidden",
          mixBlendMode: "screen",
          background: "linear-gradient(rgba(206,194,255,.34), rgba(206,194,255,.1) 35%, rgba(206,194,255,0))",
        }}
      />
      <div
        ref={line}
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          height: 40,
          zIndex: 3,
          pointerEvents: "none",
          visibility: "hidden",
          backgroundRepeat: "repeat-x",
          backgroundSize: `${WAVE_W}px 40px`,
          filter: "drop-shadow(0 0 6px rgba(225,205,255,.85))",
        }}
      />
    </>
  );
}
