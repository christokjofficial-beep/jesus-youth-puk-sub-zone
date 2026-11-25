"use client";

import React from "react";
import { Music, Radio, Disc, Globe2, Sparkles, ExternalLink } from "lucide-react";

export default function RexbandSection() {
  const albums = [
    { title: "You Are My God", year: "Inception Album", style: "Praise & Worship" },
    { title: "Worship Him", year: "Global Tour Edition", style: "Rock / World Fusion" },
    { title: "Beyond Limits", year: "World Youth Day", style: "Charismatic Contemporary" },
    { title: "Grace", year: "Apostolic Release", style: "Adoration & Ambient" },
  ];

  const worldYouthDays = [
    "Rome (2000)", "Toronto (2002)", "Cologne (2005)", "Sydney (2008)",
    "Madrid (2011)", "Rio de Janeiro (2013)", "Kraków (2016)", "Panama (2019)", "Lisbon (2023)"
  ];

  return (
    <section id="rexband" className="relative py-24 sm:py-32 bg-celestial-950 overflow-hidden border-t border-celestial-900">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sacred-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story of Rexband */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sacred-500/10 border border-sacred-500/20 text-sacred-300 text-xs font-semibold tracking-wider uppercase">
              <Music className="w-4 h-4 text-sacred-400" />
              <span>Contemporary Cultural Evangelisation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-celestial-50 leading-tight">
              Rexband: <span className="sacred-gold-gradient">Music for the King</span>
            </h2>

            <p className="text-base text-celestial-200 leading-relaxed">
              Born from the prayer circles of Jesus Youth, Rexband has spent over three decades taking the Gospel 
              to major stadiums, cultural festivals, and World Youth Days across every inhabited continent. 
              Fusing contemporary rock, ethnic world beats, and charismatic adoration, Rexband translates the ancient faith 
              into the musical heartbeat of the younger generation.
            </p>

            {/* WYD Badges */}
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-sacred-400 mb-3 flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-sacred-400" />
                World Youth Day Stages & International Concerts
              </div>
              <div className="flex flex-wrap gap-2">
                {worldYouthDays.map((wyd, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-celestial-900 border border-celestial-800 text-celestial-300"
                  >
                    {wyd}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote banner */}
            <div className="p-4 rounded-2xl bg-celestial-900/60 border border-sacred-500/20">
              <p className="italic font-serif text-sm text-sacred-200">
                &ldquo;Music is the language that bypasses every barrier and speaks directly of God’s beauty to the soul.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Music Showcase Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-sacred-500/30 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-celestial-800/80 mb-6">
                <div>
                  <h3 className="font-serif font-bold text-lg text-celestial-50">
                    Discography & Praise
                  </h3>
                  <p className="text-xs text-celestial-400">
                    Apostolic Soundtracks of Jesus Youth
                  </p>
                </div>
                <Disc className="w-7 h-7 text-sacred-400 animate-spin-slow" />
              </div>

              <div className="space-y-3.5 mb-6">
                {albums.map((album, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-celestial-900/50 border border-celestial-800/50 flex items-center justify-between hover:border-sacred-500/30 transition-colors"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-celestial-100">
                        {album.title}
                      </h4>
                      <p className="text-xs text-sacred-300/80">
                        {album.year}
                      </p>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-celestial-950 text-celestial-300 border border-celestial-800">
                      {album.style}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-celestial-800/60 text-center">
                <a
                  href="https://jesusyouth.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-sacred-300 hover:text-sacred-200 transition-colors"
                >
                  Listen on Official Streaming Channels
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
