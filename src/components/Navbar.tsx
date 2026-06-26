import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-oceanic-noir)]/80 backdrop-blur-xl border-b border-[var(--color-mystic-mint)]/10">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 bg-[var(--color-forsythia)] rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-[var(--color-oceanic-noir)]" style={{ maskImage: "url('/SVGs/cube-16-solid.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/SVGs/cube-16-solid.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
          </div>
          <span className="text-[var(--color-arctic-powder)] font-black text-xl tracking-tighter">NEXUS<span className="text-[var(--color-deep-saffron)]">.AI</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[var(--color-arctic-powder)]/80 text-sm font-medium">
          <a href="#" className="hover:text-[var(--color-forsythia)] transition-colors flex items-center gap-1 group">
            Products
            <div className="w-3 h-3 bg-current opacity-70 group-hover:rotate-180 transition-transform duration-300" style={{ maskImage: "url('/SVGs/chevron-down.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/SVGs/chevron-down.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
          </a>
          <a href="#" className="hover:text-[var(--color-forsythia)] transition-colors flex items-center gap-1 group">
            Solutions
            <div className="w-3 h-3 bg-current opacity-70 group-hover:rotate-180 transition-transform duration-300" style={{ maskImage: "url('/SVGs/chevron-down.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/SVGs/chevron-down.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
          </a>
          <a href="#" className="hover:text-[var(--color-forsythia)] transition-colors">Documentation</a>
          <a href="#" className="hover:text-[var(--color-forsythia)] transition-colors">Pricing</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors border border-[var(--color-mystic-mint)]/20 text-[var(--color-arctic-powder)]">
             <div className="w-4 h-4 bg-current" style={{ maskImage: "url('/SVGs/search.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/SVGs/search.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
          </button>
          <div className="w-[1px] h-6 bg-[var(--color-mystic-mint)]/20 mx-2" />
          <button className="px-5 py-2.5 rounded-xl font-mono text-sm font-bold bg-[var(--color-arctic-powder)] text-[var(--color-oceanic-noir)] hover:bg-[var(--color-forsythia)] transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button className="text-[var(--color-arctic-powder)] p-2">
             <div className="w-6 h-6 bg-current" style={{ maskImage: "url('/SVGs/x-mark.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/SVGs/x-mark.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
          </button>
        </div>
      </div>
    </nav>
  );
}
