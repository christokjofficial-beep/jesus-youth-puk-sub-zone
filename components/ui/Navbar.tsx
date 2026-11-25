"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, Compass, Cross, Globe, HeartHandshake, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Baptism Journey", href: "#baptism-journey" },
    { label: "The 6 Pillars", href: "#pillars" },
    { label: "Ministries", href: "#ministries" },
    { label: "Global Presence", href: "#global-movement" },
    { label: "Rexband & Arts", href: "#rexband" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-celestial-950/85 backdrop-blur-md border-b border-sacred-500/20 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Sacred Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sacred-400 to-sacred-700 flex items-center justify-center shadow-lg shadow-sacred-500/20 group-hover:shadow-sacred-400/40 transition-all duration-300">
              <span className="text-celestial-950 font-black text-xl">†</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-celestial-50 group-hover:text-sacred-300 transition-colors">
                  JESUS YOUTH
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-sacred-500/10 text-sacred-400 border border-sacred-500/20">
                  <ShieldCheck className="w-3 h-3 text-sacred-400" />
                  Pontifical Right
                </span>
              </div>
              <p className="text-[11px] text-celestial-300 tracking-widest uppercase hidden md:block">
                A Missionary Movement of the Church
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-celestial-200 hover:text-sacred-300 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Join button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#get-involved"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-celestial-950 bg-gradient-to-r from-sacred-lightGold via-sacred-400 to-sacred-500 rounded-lg shadow-md shadow-sacred-500/20 hover:shadow-sacred-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Join the Mission
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-celestial-200 hover:text-sacred-300 hover:bg-celestial-900/60 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-celestial-950/95 backdrop-blur-xl border-b border-sacred-500/20 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-celestial-100 hover:text-sacred-300 py-2 border-b border-celestial-900/40"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-celestial-950 bg-gradient-to-r from-sacred-lightGold to-sacred-400 rounded-lg shadow-lg mt-2"
            >
              Join the Mission
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
