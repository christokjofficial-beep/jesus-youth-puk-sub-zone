import React from "react";
import Link from "next/link";
import { ShieldCheck, Heart, Globe, Mail, Phone, ExternalLink } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-celestial-950 border-t border-celestial-900/80 text-celestial-200 overflow-hidden pt-16 pb-12">
      {/* Decorative divine radiant background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-sacred-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-sacred-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-celestial-900/70">
          
          {/* Identity & Canonical Recognition */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sacred-400 to-sacred-700 flex items-center justify-center shadow-md">
                <span className="text-celestial-950 font-black text-lg">†</span>
              </div>
              <span className="font-serif font-bold text-xl text-celestial-50 tracking-wider">
                JESUS YOUTH
              </span>
            </div>
            <p className="text-sm text-celestial-300 leading-relaxed max-w-md">
              An International Catholic Movement approved by the Holy See as an International Private Association of the Faithful with Pontifical Right. Fostering baptismal renewal and active missionary discipleship.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-celestial-900/60 border border-sacred-500/20 text-xs text-sacred-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-sacred-400" />
              <span>Decree of Approval • Pontifical Council for the Laity</span>
            </div>
          </div>

          {/* Quick Links / Navigation */}
          <div>
            <h4 className="font-serif font-semibold text-celestial-50 mb-4 text-sm uppercase tracking-wider">
              Spiritual Path
            </h4>
            <ul className="space-y-2.5 text-xs text-celestial-300">
              <li>
                <a href="#baptism-journey" className="hover:text-sacred-300 transition-colors">
                  The Baptism Journey
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-sacred-300 transition-colors">
                  The Six Pillars of Life
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-sacred-300 transition-colors">
                  Daily Personal Prayer
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-sacred-300 transition-colors">
                  Lectio Divina & Word of God
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-sacred-300 transition-colors">
                  Eucharistic Adoration
                </a>
              </li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="font-serif font-semibold text-celestial-50 mb-4 text-sm uppercase tracking-wider">
              Apostolates
            </h4>
            <ul className="space-y-2.5 text-xs text-celestial-300">
              <li>
                <a href="#ministries" className="hover:text-sacred-300 transition-colors">
                  Campus Ministry
                </a>
              </li>
              <li>
                <a href="#ministries" className="hover:text-sacred-300 transition-colors">
                  Teens Discipleship
                </a>
              </li>
              <li>
                <a href="#ministries" className="hover:text-sacred-300 transition-colors">
                  Professionals & Healthcare
                </a>
              </li>
              <li>
                <a href="#ministries" className="hover:text-sacred-300 transition-colors">
                  Full-Time Volunteers (FTV)
                </a>
              </li>
              <li>
                <a href="#rexband" className="hover:text-sacred-300 transition-colors">
                  Rexband & Catholic Music
                </a>
              </li>
            </ul>
          </div>

          {/* Church & Communion Links */}
          <div>
            <h4 className="font-serif font-semibold text-celestial-50 mb-4 text-sm uppercase tracking-wider">
              Ecclesial Communion
            </h4>
            <ul className="space-y-2.5 text-xs text-celestial-300">
              <li>
                <a
                  href="https://www.vatican.va"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-sacred-300 transition-colors"
                >
                  The Holy See (Vatican) <ExternalLink className="w-3 h-3 text-celestial-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.laityfamilylife.va"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-sacred-300 transition-colors"
                >
                  Dicastery for Laity & Family <ExternalLink className="w-3 h-3 text-celestial-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://jesusyouth.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-sacred-300 transition-colors"
                >
                  International Secretariat <ExternalLink className="w-3 h-3 text-celestial-400" />
                </a>
              </li>
              <li>
                <a href="#global-movement" className="hover:text-sacred-300 transition-colors">
                  40+ National Secretariats
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with scripture quote */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-celestial-400">
          <p className="italic text-center sm:text-left text-celestial-300 font-serif">
            &ldquo;You will receive power when the Holy Spirit comes upon you; and you will be my witnesses to the ends of the earth.&rdquo; — Acts 1:8
          </p>
          <p className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} Jesus Youth International. Built for the glory of Jesus Christ.
          </p>
        </div>
      </div>
    </footer>
  );
}
