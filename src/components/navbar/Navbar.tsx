"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    title: "Solutions",
    href: "#solutions",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Developers",
    href: "#developers",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-6 flex w-[95%] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-2xl">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFC801] via-[#FF9932] to-[#114C5A] shadow-lg">

            <span className="font-black text-black">
              A
            </span>

          </div>

          <div>

            <h2 className="font-bold text-lg">
              AetherFlow
            </h2>

            <p className="mono text-[11px] uppercase tracking-[0.25em] text-[#FFC801]">
              AI Infrastructure
            </p>

          </div>

        </div>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 lg:flex">

          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative text-sm text-white/70 transition hover:text-white"
            >
              {item.title}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#FFC801] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

        </nav>

        {/* CTA */}

        <div className="hidden lg:flex">

          <button className="group flex items-center gap-3 rounded-full bg-[#FFC801] px-6 py-3 font-semibold text-[#172B36] transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,200,1,.35)]">

            Get Started

            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </button>

        </div>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
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

            <button className="mt-4 rounded-full bg-[#FFC801] py-4 font-semibold text-[#172B36]">
              Get Started
            </button>

          </div>

        </div>
      )}
    </header>
  );
}
