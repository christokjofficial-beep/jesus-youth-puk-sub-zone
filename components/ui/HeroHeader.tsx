"use client";

import { useEffect, useRef } from "react";
import { STATUE_SWITCH } from "@/components/3d/DoveSkyOverlay";

/**
 * "Jesus Youth" main header above the Christ the Redeemer statue.
 * Fades out just before the clouds roll in (see DoveSkyOverlay), so it never sits on top of them.
 */
export default function HeroHeader() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let raf = 0;
    const smooth = (a: number, b: number, x: number) => {
      const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    };
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const scroller = document.querySelector<HTMLElement>(".scroll-container");
      const statue = document.querySelector<HTMLElement>(".js-section-space");
      if (!scroller || !statue || !ref.current) return;
      const vh = window.innerHeight;
      // fully in place at the top; gone as the clouds start (they roll in over the last 0.7 screens before the switch)
      const statueSwitch = statue.offsetTop + STATUE_SWITCH * (statue.offsetHeight - vh);
      const k = 1 - smooth(statueSwitch - 1.0 * vh, statueSwitch - 0.6 * vh, scroller.scrollTop);
      ref.current.style.opacity = String(k);
      ref.current.style.transform = `translate(-50%, ${(1 - k) * -2}vh)`;
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <h1
      ref={ref}
      className="t-mauren"
      style={{
        position: "fixed",
        top: "calc(env(safe-area-inset-top, 0px) + 9vh)",
        left: "50%",
        transform: "translate(-50%, 0)",
        margin: 0,
        zIndex: 3,
        pointerEvents: "none",
        whiteSpace: "nowrap",
        color: "#f3ecdc",
        fontSize: "clamp(2.6rem, 7vw, 6rem)",
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: "0.02em",
        textShadow: "0 2px 24px rgba(0,0,0,.45)",
      }}
    >
      Jesus Youth
    </h1>
  );
}
