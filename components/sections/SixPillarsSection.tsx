"use client";

import React, { useState } from "react";
import { SIX_PILLARS } from "@/lib/constants";
import { Pillar } from "@/types";
import { Sparkles, BookOpen, Flame, Heart, Users, Shield, CheckCircle2 } from "lucide-react";

export default function SixPillarsSection() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("prayer");

  const selectedPillar =
    SIX_PILLARS.find((p) => p.id === selectedPillarId) || SIX_PILLARS[0];

  return (
    <section id="pillars" className="relative py-24 sm:py-32 bg-celestial-950 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sacred-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sacred-500/10 border border-sacred-500/20 text-sacred-400 text-xs sm:text-sm font-medium uppercase tracking-widest mb-4">
            <Flame className="w-4 h-4 text-sacred-400" />
            <span>Foundations of Discipleship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-celestial-50 tracking-wide mb-4">
            The Six Pillars of <span className="sacred-gold-gradient">Jesus Youth</span>
          </h2>
          <p className="text-sm sm:text-base text-celestial-200 leading-relaxed">
            The spirituality of Jesus Youth is lived through six daily pillars. 
            Together, they form a holistic, Christ-centered way of life that integrates personal prayer, 
            communion with the Church, and courageous mission in the world.
          </p>
        </div>

        {/* Six Pillars Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SIX_PILLARS.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`glass-card rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? "border-sacred-400/60 bg-celestial-900/80 shadow-xl shadow-sacred-500/10 scale-[1.02]"
                    : "border-celestial-800/40 hover:border-sacred-500/30"
                }`}
              >
                {/* Top Number & Title */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-black sacred-gold-gradient">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-celestial-950/70 text-sacred-300 border border-sacred-500/20">
                      Pillar
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-celestial-50 mb-1 group-hover:text-sacred-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-sacred-300/90 font-medium mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-celestial-200 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Scripture Quote snippet */}
                <div className="pt-4 border-t border-celestial-800/60 text-xs text-celestial-300 italic font-serif">
                  &ldquo;{pillar.scripture.slice(0, 85)}...&rdquo;
                  <span className="block text-[11px] text-sacred-400 not-italic font-sans mt-1">
                    — {pillar.reference}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Deep Dive Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-sacred-500/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-celestial-800/60 mb-6">
              <div>
                <span className="text-xs font-serif font-bold text-sacred-400 uppercase tracking-widest">
                  Deep Dive • Pillar {selectedPillar.number}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-celestial-50 mt-1">
                  {selectedPillar.title}
                </h3>
              </div>
              <div className="text-xs text-sacred-300 font-semibold px-3 py-1.5 rounded-lg bg-celestial-950 border border-sacred-500/20 self-start sm:self-auto">
                {selectedPillar.reference}
              </div>
            </div>

            {/* Scripture Full Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-celestial-950/80 border border-sacred-500/20 mb-6">
              <p className="text-sm sm:text-base italic font-serif text-sacred-100 leading-relaxed">
                &ldquo;{selectedPillar.scripture}&rdquo;
              </p>
            </div>

            {/* Daily Practices List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-sacred-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sacred-400" />
                  Key Daily Discipleship Practices
                </h4>
                <ul className="space-y-2.5">
                  {selectedPillar.keyPractices.map((practice, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-celestial-200">
                      <span className="text-sacred-400 mt-0.5">•</span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spiritual Fruit */}
              <div className="p-4 sm:p-5 rounded-2xl bg-celestial-900/40 border border-celestial-800/60 flex flex-col justify-center">
                <h4 className="text-xs font-bold uppercase tracking-wider text-celestial-300 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sacred-400" />
                  Spiritual Fruit Produced
                </h4>
                <p className="text-sm text-sacred-200 leading-relaxed">
                  {selectedPillar.spiritualFruit}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
