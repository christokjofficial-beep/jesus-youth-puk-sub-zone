"use client";

import React, { useState } from "react";
import { Sparkles, Send, CheckCircle2, HeartHandshake, ShieldCheck, Mail, MapPin } from "lucide-react";

export default function CallToMissionSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    ministryInterest: "Campus Ministry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="get-involved" className="relative py-24 sm:py-32 bg-celestial-950 overflow-hidden border-t border-celestial-900">
      
      {/* Background sacred radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sacred-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Consecration & Spiritual Invitation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sacred-500/10 border border-sacred-500/20 text-sacred-300 text-xs font-semibold tracking-wider uppercase">
              <HeartHandshake className="w-4 h-4 text-sacred-400" />
              <span>Step Forward in Faith</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-celestial-50 leading-tight">
              Answer the Call: <br />
              <span className="sacred-gold-gradient">Walk with Jesus Youth</span>
            </h2>

            <p className="text-base text-celestial-200 leading-relaxed">
              Whether you are a university student longing for authentic Catholic fellowship, 
              a teen seeking direction, a working professional wanting to live your values, 
              or a young adult discerning radical mission service—there is a place for you in this family.
            </p>

            {/* Prayer of Consecration */}
            <div className="p-6 rounded-2xl bg-celestial-900/60 border border-sacred-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase font-serif font-bold text-sacred-300">
                <Sparkles className="w-4 h-4 text-sacred-400" />
                Prayer of Daily Consecration
              </div>
              <p className="font-serif italic text-sm text-sacred-100 leading-relaxed">
                &ldquo;Lord Jesus Christ, I offer my youth, my studies, my career, and my whole life into Your sacred hands. 
                Renew in me the grace of my baptism, fill me with the Holy Spirit, 
                and make me a bold apostle of Your love to all I meet today. Amen.&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs text-celestial-300">
              <ShieldCheck className="w-5 h-5 text-sacred-400 flex-shrink-0" />
              <span>Over 100,000 youth praying together across 40+ nations every single day.</span>
            </div>
          </div>

          {/* Right Column: Connect & Get Involved Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-sacred-500/30 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-sacred-500/20 border border-sacred-400/40 flex items-center justify-center mx-auto text-sacred-300">
                    <CheckCircle2 className="w-8 h-8 text-sacred-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-celestial-50">
                    Welcome to the Journey
                  </h3>
                  <p className="text-sm text-celestial-200 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your details have been received! 
                    A regional Jesus Youth coordinator will reach out to connect you with your local fellowship or campus cell group.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-sacred-300 hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-celestial-50">
                      Connect with a Local Fellowship
                    </h3>
                    <p className="text-xs text-celestial-300 mt-1">
                      Find a cell group, campus outreach, or youth retreat near you.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-celestial-200 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Bosco"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-celestial-950/70 border border-celestial-800 text-celestial-50 text-sm focus:outline-none focus:border-sacred-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-celestial-200 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-celestial-950/70 border border-celestial-800 text-celestial-50 text-sm focus:outline-none focus:border-sacred-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-celestial-200 mb-1">
                        Country / City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. London, UK"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-celestial-950/70 border border-celestial-800 text-celestial-50 text-sm focus:outline-none focus:border-sacred-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-celestial-200 mb-1">
                        Ministry Interest
                      </label>
                      <select
                        value={formData.ministryInterest}
                        onChange={(e) => setFormData({ ...formData, ministryInterest: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-celestial-950/70 border border-celestial-800 text-celestial-50 text-sm focus:outline-none focus:border-sacred-400 transition-colors"
                      >
                        <option value="Campus Ministry">Campus / University</option>
                        <option value="Teens Ministry">Teens Discipleship</option>
                        <option value="Professionals">Professionals & Tech</option>
                        <option value="Full-Time Volunteers">Full-Time Volunteer (FTV)</option>
                        <option value="Music & Media">Rexband & Music</option>
                        <option value="Family Ministry">Couples & Family</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-celestial-200 mb-1">
                      Personal Note or Prayer Request
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your spiritual journey or ask a question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-celestial-950/70 border border-celestial-800 text-celestial-50 text-sm focus:outline-none focus:border-sacred-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-celestial-950 bg-gradient-to-r from-sacred-lightGold via-sacred-400 to-sacred-500 rounded-xl shadow-lg shadow-sacred-500/20 hover:shadow-sacred-400/40 hover:brightness-105 transition-all duration-200"
                  >
                    <Send className="w-4 h-4 text-celestial-950" />
                    Connect with Jesus Youth
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
