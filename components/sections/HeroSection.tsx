"use client";

import React from "react";
import SacredCrossCanvas from "@/components/3d/SacredCrossCanvas";
import { MOVEMENT_STATS, SITE_METADATA } from "@/lib/constants";
import { Sparkles, ArrowRight, ShieldCheck, Heart, Compass, Droplets } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Radiant celestial ambient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sacred-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-water-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pontifical Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-celestial-900/80 border border-sacred-500/30 text-sacred-300 text-xs font-semibold tracking-wider uppercase shadow-inner">
              <ShieldCheck className="w-4 h-4 text-sacred-400" />
              <span>International Private Association of Pontifical Right</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-celestial-50 leading-[1.15] tracking-tight">
              A Missionary Movement at the{" "}
              <span className="sacred-gold-gradient block sm:inline">Heart of the Church</span>
            </h1>

            {/* Subtitle / Charism */}
            <p className="text-base sm:text-lg text-celestial-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Rooted in the living waters of baptism and anchored in the Six Spiritual Pillars. 
              Forming young disciples across 40+ countries to encounter Jesus Christ, witness His Gospel, 
              and ignite the modern world with divine hope.
            </p>

            {/* Scriptural Anchor */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-sacred-200/90 font-serif italic border-l-2 border-sacred-400 pl-3">
              &ldquo;You will be my witnesses... to the ends of the earth.&rdquo; — Acts 1:8
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#baptism-journey"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-celestial-950 bg-gradient-to-r from-sacred-lightGold via-sacred-400 to-sacred-500 rounded-xl shadow-lg shadow-sacred-500/25 hover:shadow-sacred-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Droplets className="w-4 h-4 text-celestial-950" />
                Experience Baptism Journey
              </a>

              <a
                href="#pillars"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-celestial-100 hover:text-sacred-300 bg-celestial-900/60 hover:bg-celestial-900 border border-celestial-800 hover:border-sacred-500/40 rounded-xl transition-all duration-200"
              >
                <span>The Six Pillars</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right 3D Column: Radiant Interactive Latin Cross */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative">
              <SacredCrossCanvas />
              <div className="text-center mt-[-20px] relative z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-celestial-900/80 border border-sacred-500/20 text-[11px] text-sacred-300/80 tracking-widest uppercase">
                  <Sparkles className="w-3 h-3 text-sacred-400" />
                  Interactive 3D Sacred Cross • Drag to rotate
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Global Statistics Bar */}
        <div className="mt-16 pt-8 border-t border-celestial-900/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {MOVEMENT_STATS.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-celestial-900/30 border border-celestial-800/40">
                <div className="font-serif text-3xl sm:text-4xl font-black sacred-gold-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-celestial-100 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-celestial-400">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
