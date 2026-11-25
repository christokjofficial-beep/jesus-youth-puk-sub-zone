"use client";

import React, { useState } from "react";
import { MINISTRIES_DATA } from "@/lib/constants";
import {
  GraduationCap,
  Sparkles,
  Briefcase,
  Compass,
  Music,
  Heart,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function MinistriesSection() {
  const [activeMinistryId, setActiveMinistryId] = useState<string>("campus");

  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-5 h-5 text-sacred-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-water-400" />,
    Briefcase: <Briefcase className="w-5 h-5 text-sacred-300" />,
    Compass: <Compass className="w-5 h-5 text-sacred-500" />,
    Music: <Music className="w-5 h-5 text-water-300" />,
    Heart: <Heart className="w-5 h-5 text-sacred-400" />,
  };

  const activeMinistry =
    MINISTRIES_DATA.find((m) => m.id === activeMinistryId) || MINISTRIES_DATA[0];

  return (
    <section id="ministries" className="relative py-24 sm:py-32 bg-celestial-900/60 border-t border-celestial-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-water-500/10 border border-water-500/20 text-water-300 text-xs sm:text-sm font-medium uppercase tracking-widest mb-4">
            <Compass className="w-4 h-4 text-water-400" />
            <span>Apostolates in the World</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-celestial-50 tracking-wide mb-4">
            Ministries of <span className="sacred-gold-gradient">Encounter</span>
          </h2>
          <p className="text-sm sm:text-base text-celestial-200 leading-relaxed">
            Wherever young people live, study, create, and work, Jesus Youth establishes apostolates to witness to Christ 
            through personal presence, creative cultural arts, and compassionate service.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {MINISTRIES_DATA.map((ministry) => {
            const isActive = ministry.id === activeMinistryId;
            return (
              <div
                key={ministry.id}
                onClick={() => setActiveMinistryId(ministry.id)}
                className={`glass-card rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? "border-sacred-400/60 bg-celestial-800/80 shadow-xl shadow-sacred-500/10 scale-[1.02]"
                    : "border-celestial-800/50 hover:border-sacred-500/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-celestial-950/80 border border-sacred-500/20">
                      {iconMap[ministry.icon]}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-celestial-400">
                      {ministry.targetAudience}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-celestial-50 mb-1">
                    {ministry.name}
                  </h3>
                  <p className="text-xs text-sacred-300 font-medium mb-3">
                    {ministry.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-celestial-200 leading-relaxed mb-4">
                    {ministry.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-celestial-800/60">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-sacred-400 mb-2">
                    Key Apostolate Initiatives:
                  </div>
                  <ul className="space-y-1.5">
                    {ministry.initiatives.map((init, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-xs text-celestial-300">
                        <CheckCircle className="w-3.5 h-3.5 text-sacred-500 flex-shrink-0" />
                        <span>{init}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
