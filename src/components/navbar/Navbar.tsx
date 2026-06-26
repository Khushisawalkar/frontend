"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { title: "Solutions", href: "#solutions" },
  { title: "Features", href: "#features" },
  { title: "Developers", href: "#developers" },
  { title: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-in-out pt-6 px-4 md:px-0">
      <div 
        className={`mx-auto flex w-full max-w-6xl items-center justify-between transition-all duration-700 ease-in-out ${
          scrolled 
            ? "rounded-full border border-arctic/10 bg-oceanic/60 px-6 py-4 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]" 
            : "px-2 py-2"
        }`}
      >

        {/* Logo - Elegant & Minimal */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-nocturnal to-oceanic border border-arctic/10 shadow-lg group-hover:shadow-nocturnal/50 transition-all duration-500">
            <span className="font-serif italic font-medium text-arctic/90 text-lg">A</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-[17px] font-medium tracking-wide text-arctic/90 group-hover:text-arctic transition-colors">AetherFlow</span>
          </div>
        </Link>

        {/* Desktop Nav - Editorial Rhythm */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              href={link.href}
              className="text-[15px] font-medium text-arctic/60 hover:text-arctic transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA - Soft Interaction */}
        <div className="hidden md:block">
          <Link 
            href="/get-started" 
            className="flex items-center gap-2 rounded-full bg-arctic/5 border border-arctic/10 px-6 py-2.5 text-[15px] font-medium text-arctic backdrop-blur-md transition-all duration-500 hover:bg-arctic hover:text-oceanic hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-arctic/5 border border-arctic/10 text-arctic transition-colors hover:bg-arctic/10"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

      </div>

      {/* Mobile Menu - Glass Overlay */}
      <div 
        className={`fixed inset-x-4 top-24 rounded-3xl border border-arctic/10 bg-oceanic/80 backdrop-blur-3xl transition-all duration-500 ease-in-out md:hidden overflow-hidden ${
          open ? "max-h-[400px] opacity-100 shadow-2xl" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-arctic/80 hover:text-arctic transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <Link 
            href="/get-started" 
            onClick={() => setOpen(false)}
            className="flex items-center justify-center rounded-full bg-arctic text-oceanic px-6 py-4 text-[15px] font-medium transition-transform active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>

    </header>
  );
}
