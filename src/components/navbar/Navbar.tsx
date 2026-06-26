"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { title: "Solutions", href: "#solutions" },
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "Developers", href: "#developers" },
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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <div 
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled 
            ? "mt-4 w-[90%] max-w-5xl rounded-full border border-white/10 bg-[#172B36]/80 px-6 py-3 backdrop-blur-2xl shadow-xl"
            : "mt-0 w-[100%] max-w-7xl rounded-none border-transparent bg-transparent px-8 py-6 backdrop-blur-none"
        }`}
      >

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC801] via-[#FF9932] to-[#114C5A] shadow-[0_0_20px_rgba(255,200,1,0.2)]">
            <span className="font-black text-black">A</span>
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight text-white">AetherFlow</h2>
            <p className="mono text-[10px] uppercase tracking-[0.25em] text-[#FFC801]">AI Infrastructure</p>
          </div>
        </div>

        {/* Desktop */}
        <nav className="hidden items-center gap-2 lg:flex relative">
          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="relative text-sm font-medium text-white/70 transition-colors hover:text-white px-4 py-2 rounded-full hover:bg-white/10"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link href="/get-started" className="group relative overflow-hidden flex items-center gap-3 rounded-full bg-[#FFC801] px-6 py-2.5 font-semibold text-[#172B36] transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,200,1,.35)]">
            <span className="relative z-10">Get Started</span>
            <ArrowUpRight size={18} className="relative z-10 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-auto mt-4 w-[95%] max-w-7xl rounded-3xl border border-white/10 bg-[#172B36]/95 p-6 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-white/80 transition hover:text-[#FFC801]"
              >
                {item.title}
              </a>
            ))}
            <Link href="/get-started" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-[#FFC801] py-4 text-center font-semibold text-[#172B36] block">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
