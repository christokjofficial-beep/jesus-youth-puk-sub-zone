"use client";

import { useEffect, useRef } from "react";

/**
 * "Jesus Youth" main header above the Christ the Redeemer statue.
 * Fades out before the clouds roll in.
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
      const sky = document.querySelector<HTMLElement>(".js-section-sky");
      if (!scroller || !sky || !ref.current) return;
      const vh = window.innerHeight;
      // fully in place at the top; gone by the time the cloud screen starts
      const k = 1 - smooth(sky.offsetTop - 2.2 * vh, sky.offsetTop - 1.1 * vh, scroller.scrollTop);
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
