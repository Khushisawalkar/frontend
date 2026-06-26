import React from 'react';

export default function Navbar() {
  return (
    <div className="w-full flex justify-center pt-6 px-6 absolute top-0 z-50">
      <nav className="w-full max-w-[1400px] bg-[#0F171A]/90 backdrop-blur-md border border-[var(--color-mystic-mint)]/10 rounded-full h-16 flex items-center justify-between px-6 lg:px-8 shadow-2xl">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 rounded flex items-center justify-center">
            {/* SVG mask with Forsythia */}
            <div className="w-8 h-8 bg-[var(--color-forsythia)]" style={{ maskImage: "url('/frontend/SVGs/cube-16-solid.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/cube-16-solid.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
          </div>
          <span className="text-[var(--color-arctic-powder)] font-bold text-lg tracking-wide">NEXUS.AI</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[var(--color-arctic-powder)]/80 text-sm font-medium">
          <a href="#" className="hover:text-[var(--color-arctic-powder)] transition-colors">Products</a>
          <a href="#" className="hover:text-[var(--color-arctic-powder)] transition-colors">Solutions</a>
          <a href="#" className="hover:text-[var(--color-arctic-powder)] transition-colors">Documentation</a>
          <a href="#" className="hover:text-[var(--color-arctic-powder)] transition-colors">Pricing</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-[var(--color-arctic-powder)] hover:text-white transition-colors">
            Login
          </button>
          <button className="px-5 py-2 rounded-full font-medium text-sm border border-[var(--color-mystic-mint)]/20 text-[var(--color-arctic-powder)] hover:bg-white/5 transition-colors">
            Contact Sales
          </button>
          <button className="px-5 py-2 rounded-full font-medium text-sm bg-[var(--color-forsythia)] text-[#0F171A] hover:bg-[#ffb400] transition-colors">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
}
