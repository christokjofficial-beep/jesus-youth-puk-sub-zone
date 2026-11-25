"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import HolySpiritDoveCanvas from "@/components/3d/HolySpiritDoveCanvas";
import { Globe, ShieldCheck, MapPin, Quote, ChevronRight, Award } from "lucide-react";

export default function GlobalMovementSection() {
  const regions = [
    {
      name: "Asia-Pacific",
      countries: "India, Singapore, Malaysia, Australia, New Zealand, Philippines, Thailand, Sri Lanka, UAE, Qatar, Kuwait, Oman, Bahrain",
      description: "Historic cradle of Jesus Youth since the 1980s, vibrant with campus prayer cells and extensive youth ministries."
    },
    {
      name: "Europe",
      countries: "United Kingdom, Ireland, Germany, Italy, Switzerland, Austria, France, Spain, Poland, Malta",
      description: "Thriving parish communities, young adult evangelisation fellowships, and missionary outreaches across the continent."
    },
    {
      name: "North America",
      countries: "United States (over 25 states), Canada (Ontario, Alberta, BC, Quebec)",
      description: "Vibrant teen discipleship conferences, university campuses, and young professional apostolates."
    },
    {
      name: "Africa & Latin America",
      countries: "Uganda, Kenya, Tanzania, South Africa, Brazil",
      description: "Growing pioneer missions, youth leadership academies, and deep solidarity with underprivileged communities."
    }
  ];

  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section id="global-movement" className="relative py-24 sm:py-32 bg-celestial-900/40 border-t border-celestial-900 overflow-hidden">
      
      {/* Background celestial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-celestial-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sacred-500/10 border border-sacred-500/20 text-sacred-300 text-xs sm:text-sm font-medium uppercase tracking-widest mb-4">
            <Globe className="w-4 h-4 text-sacred-400" />
            <span>40+ Nations • 5 Continents</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-celestial-50 tracking-wide mb-4">
            A Worldwide <span className="sacred-gold-gradient">Communion</span>
          </h2>
          <p className="text-sm sm:text-base text-celestial-200 leading-relaxed">
            From university dorms in London to prayer houses in Singapore and mission outposts in East Africa, 
            Jesus Youth unites young Catholics across cultures in the same baptismal fire and fraternal charity.
          </p>
        </div>

        {/* Pontifical Recognition Decree Highlight */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 mb-16 border border-sacred-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-celestial-950 text-sacred-300 text-xs font-semibold uppercase tracking-wider border border-sacred-500/20">
                <ShieldCheck className="w-4 h-4 text-sacred-400" />
                Pontifical Right Approval
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-celestial-50">
                Recognized by the Holy See
              </h3>
              <p className="text-sm text-celestial-200 leading-relaxed">
                By official decree of the Pontifical Council for the Laity, Jesus Youth was granted formal canonical recognition 
                as an International Private Association of the Faithful with Juridical Personality. 
                This seals the movement’s ecclesial communion at the heart of the universal Catholic Church.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-sacred-300/90 pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-sacred-400" />
                  Decree of Approval (Holy See)
                </span>
                <span>•</span>
                <span>Statutes Approved Perpetually</span>
                <span>•</span>
                <span>Vatican Dicastery for Laity & Family</span>
              </div>
            </div>

            {/* 3D Celestial Holy Spirit Dove Canvas */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-full">
                <HolySpiritDoveCanvas />
                <p className="text-center text-[11px] text-sacred-300/80 uppercase tracking-widest mt-[-10px]">
                  Anointed by the Holy Spirit
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Global Regions Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4 space-y-2">
            <h4 className="font-serif font-bold text-lg text-celestial-50 mb-4">
              Explore Continents
            </h4>
            {regions.map((region, idx) => (
              <button
                key={region.name}
                onClick={() => setActiveRegion(idx)}
                className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between ${
                  activeRegion === idx
                    ? "bg-celestial-800 border border-sacred-500/40 text-sacred-300 shadow-md"
                    : "bg-celestial-900/40 border border-celestial-800/40 text-celestial-300 hover:bg-celestial-900"
                }`}
              >
                <div className="flex items-center gap-2.5 font-medium text-sm">
                  <MapPin className="w-4 h-4 text-sacred-400" />
                  <span>{region.name}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeRegion === idx ? "translate-x-1" : ""}`} />
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between border-sacred-500/20">
              <div>
                <span className="text-xs uppercase tracking-widest text-sacred-400 font-bold">
                  Presence Overview
                </span>
                <h3 className="font-serif text-2xl font-bold text-celestial-50 mt-1 mb-4">
                  {regions[activeRegion].name}
                </h3>
                <p className="text-sm text-celestial-200 leading-relaxed mb-6">
                  {regions[activeRegion].description}
                </p>
                <div className="p-4 rounded-xl bg-celestial-950/70 border border-celestial-800/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-celestial-400 block mb-2">
                    Active Countries & Mission Outposts:
                  </span>
                  <p className="text-xs sm:text-sm text-sacred-200 leading-relaxed">
                    {regions[activeRegion].countries}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials from Global Disciples */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-celestial-50 text-center mb-8">
            Voices of Missionary Youth
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between border-celestial-800/60"
              >
                <div>
                  <Quote className="w-6 h-6 text-sacred-400/50 mb-3" />
                  <p className="text-xs sm:text-sm italic font-serif text-celestial-100 leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-celestial-800/60">
                  <div className="font-serif font-bold text-sm text-sacred-300">
                    {t.name}
                  </div>
                  <div className="text-xs text-celestial-400">
                    {t.role} • {t.country}
                  </div>
                  <div className="mt-2 text-[10px] uppercase font-semibold text-water-300">
                    Impact: {t.pillarImpact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
