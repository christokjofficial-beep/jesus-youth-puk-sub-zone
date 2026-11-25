"use client";

import React, { useState, useEffect, useRef } from "react";
import { BAPTISM_SCENE_STAGES } from "@/lib/constants";
import BaptismScene3D from "@/components/3d/BaptismScene3D";
import { ChevronRight, ChevronLeft, Droplets, Sparkles, BookOpen, Heart, Globe, ArrowDown } from "lucide-react";

export default function BaptismScrollExperience() {
  const [activeStageId, setActiveStageId] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentStage =
    BAPTISM_SCENE_STAGES.find((s) => s.id === activeStageId) ||
    BAPTISM_SCENE_STAGES[0];

  const handleNext = () => {
    if (activeStageId < BAPTISM_SCENE_STAGES.length) {
      setActiveStageId((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeStageId > 1) {
      setActiveStageId((prev) => prev - 1);
    }
  };

  // Optional scroll detection when scrolling inside this section
  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // If section is within viewport, calculate progress
      if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.3) {
        const totalHeight = rect.height - windowHeight;
        const currentScrolled = -rect.top + windowHeight * 0.2;
        const rawProgress = Math.max(0, Math.min(1, currentScrolled / totalHeight));
        
        const stageIndex = Math.min(
          BAPTISM_SCENE_STAGES.length,
          Math.floor(rawProgress * BAPTISM_SCENE_STAGES.length) + 1
        );
        if (stageIndex >= 1 && stageIndex <= 5) {
          setActiveStageId(stageIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="baptism-journey"
      ref={containerRef}
      className="relative min-h-[100vh] py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-celestial-950 via-water-900 to-celestial-950 border-y border-water-700/30"
    >
      {/* Dynamic 3D WebGL Baptism Waters and Sky background */}
      <BaptismScene3D currentStage={activeStageId} />

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-celestial-950/40 to-celestial-950/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-water-500/10 border border-water-400/30 text-water-300 text-xs sm:text-sm font-medium uppercase tracking-widest mb-4">
            <Droplets className="w-4 h-4 text-water-400" />
            <span>The Baptismal Transformation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-celestial-50 tracking-wide mb-4">
            The Sacred Waters of <span className="sacred-gold-gradient">Rebirth</span>
          </h2>
          <p className="text-sm sm:text-base text-celestial-200 leading-relaxed">
            The foundation of the Jesus Youth movement is the radical rediscovery of baptism: 
            dying with Christ to rise into newness of life, empowered by the Holy Spirit for the salvation of the world.
          </p>
        </div>

        {/* 5-Stage Interactive Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 overflow-x-auto pb-2 scrollbar-none">
          {BAPTISM_SCENE_STAGES.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? "bg-gradient-to-r from-sacred-400/20 to-water-500/20 text-sacred-300 border border-sacred-400/50 shadow-lg shadow-sacred-500/10 scale-105"
                    : "bg-celestial-900/40 text-celestial-300 border border-celestial-800/40 hover:bg-celestial-900/70 hover:text-celestial-100"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center ${
                    isActive
                      ? "bg-sacred-400 text-celestial-950"
                      : "bg-celestial-800 text-celestial-300"
                  }`}
                >
                  {stage.id}
                </span>
                <span className="hidden sm:inline">{stage.phase.split(". ")[1]}</span>
                <span className="sm:hidden">{`Stage ${stage.id}`}</span>
              </button>
            );
          })}
        </div>

        {/* Stage Presentation Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-500 border border-sacred-400/20 shadow-2xl">
            
            {/* Top Stage Indicator & Scripture */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-celestial-800/60 mb-6">
              <div>
                <span className="text-xs uppercase font-semibold tracking-widest text-sacred-400">
                  {currentStage.phase}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-celestial-50 mt-1">
                  {currentStage.title}
                </h3>
                <p className="text-xs sm:text-sm text-water-300 mt-0.5">
                  {currentStage.subtitle}
                </p>
              </div>

              <div className="sm:text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-celestial-900/80 border border-sacred-500/20 text-sacred-300 text-xs font-serif">
                  <BookOpen className="w-3.5 h-3.5 text-sacred-400" />
                  <span>Scripture Witness</span>
                </div>
              </div>
            </div>

            {/* Scripture Quote Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-celestial-950/60 border border-sacred-500/20 mb-8 relative">
              <span className="absolute -top-3 left-6 text-xl text-sacred-400/80">“</span>
              <p className="text-sm sm:text-base italic text-sacred-100 font-serif leading-relaxed px-2">
                {currentStage.scripture}
              </p>
            </div>

            {/* Narrative Body */}
            <div className="space-y-4 mb-8 text-sm sm:text-base text-celestial-100 leading-relaxed">
              <p>{currentStage.narrative}</p>
            </div>

            {/* Spiritual Meaning & Visual Metaphor Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-celestial-800/60 mb-8">
              <div className="p-4 rounded-xl bg-celestial-900/40 border border-celestial-800/40">
                <div className="flex items-center gap-2 text-sacred-300 font-semibold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-sacred-400" />
                  Spiritual Dimension
                </div>
                <p className="text-xs sm:text-sm text-celestial-200">
                  {currentStage.spiritualMeaning}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-celestial-900/40 border border-celestial-800/40">
                <div className="flex items-center gap-2 text-water-300 font-semibold text-xs uppercase tracking-wider mb-2">
                  <Droplets className="w-4 h-4 text-water-400" />
                  Sacred Visual Metaphor
                </div>
                <p className="text-xs sm:text-sm text-celestial-200">
                  {currentStage.visualCue}
                </p>
              </div>
            </div>

            {/* Stage Stepper Controls */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={handlePrev}
                disabled={activeStageId === 1}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeStageId === 1
                    ? "opacity-40 cursor-not-allowed text-celestial-400"
                    : "text-celestial-100 hover:text-sacred-300 hover:bg-celestial-900/60"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Chapter
              </button>

              <div className="flex items-center gap-1.5">
                {BAPTISM_SCENE_STAGES.map((s) => (
                  <span
                    key={s.id}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      s.id === activeStageId
                        ? "w-8 bg-sacred-400"
                        : "w-2 bg-celestial-800"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={activeStageId === BAPTISM_SCENE_STAGES.length}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeStageId === BAPTISM_SCENE_STAGES.length
                    ? "opacity-40 cursor-not-allowed text-celestial-400"
                    : "bg-gradient-to-r from-sacred-400 to-sacred-600 text-celestial-950 hover:brightness-110 shadow-md shadow-sacred-500/20"
                }`}
              >
                Next Chapter
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
