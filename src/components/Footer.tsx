import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-oceanic-noir)] pt-24 pb-12 border-t border-[var(--color-mystic-mint)]/10 text-[var(--color-arctic-powder)] relative overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[var(--color-nocturnal-expedition)] rounded-lg flex items-center justify-center border border-[var(--color-mystic-mint)]/20">
                <div className="w-5 h-5 bg-[var(--color-forsythia)]" style={{ maskImage: "url('/frontend/SVGs/cube-16-solid.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/cube-16-solid.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
              </div>
              <span className="font-black text-xl tracking-tighter">NEXUS<span className="text-[var(--color-deep-saffron)]">.AI</span></span>
            </div>
            <p className="text-[var(--color-mystic-mint)]/60 text-sm leading-relaxed mb-6">
              The foundational data flow architecture for billion-dollar enterprises. Automate, scale, and conquer.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-[var(--color-mystic-mint)] mb-6 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-[var(--color-mystic-mint)]/70">
              <li><a href="#" className="hover:text-[var(--color-forsythia)] transition-colors flex items-center gap-2">API Documentation <div className="w-3 h-3 bg-current" style={{ maskImage: "url('/frontend/SVGs/link.svg')", maskSize: "cover", WebkitMaskImage: "url('/frontend/SVGs/link.svg')" }} /></a></li>
              <li><a href="#" className="hover:text-[var(--color-forsythia)] transition-colors flex items-center gap-2">GitHub <div className="w-3 h-3 bg-current" style={{ maskImage: "url('/frontend/SVGs/link-solid.svg')", maskSize: "cover", WebkitMaskImage: "url('/frontend/SVGs/link-solid.svg')" }} /></a></li>
              <li><a href="#" className="hover:text-[var(--color-forsythia)] transition-colors">Community Forum</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-[var(--color-mystic-mint)] mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-[var(--color-mystic-mint)]/70">
              <li><a href="#" className="hover:text-[var(--color-forsythia)] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-forsythia)] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--color-forsythia)] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-[var(--color-mystic-mint)] mb-6 text-sm uppercase tracking-widest">Latest Updates</h4>
            <div className="flex items-center gap-4 text-sm text-[var(--color-mystic-mint)]/70">
              <button className="w-8 h-8 rounded-full border border-[var(--color-mystic-mint)]/20 flex items-center justify-center hover:bg-[var(--color-forsythia)] hover:text-[var(--color-oceanic-noir)] transition-colors">
                <div className="w-3 h-3 bg-current" style={{ maskImage: "url('/frontend/SVGs/chevron-left.svg')", maskSize: "cover", WebkitMaskImage: "url('/frontend/SVGs/chevron-left.svg')" }} />
              </button>
              <span className="font-mono text-xs">Page 1 of 5</span>
              <button className="w-8 h-8 rounded-full border border-[var(--color-mystic-mint)]/20 flex items-center justify-center hover:bg-[var(--color-forsythia)] hover:text-[var(--color-oceanic-noir)] transition-colors">
                <div className="w-3 h-3 bg-current" style={{ maskImage: "url('/frontend/SVGs/chevron-right.svg')", maskSize: "cover", WebkitMaskImage: "url('/frontend/SVGs/chevron-right.svg')" }} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--color-mystic-mint)]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-mystic-mint)]/40 text-xs font-mono">
            &copy; {new Date().getFullYear()} Nexus AI Infrastructure. All rights reserved.
          </p>
          <a 
            href="#"
            className="flex items-center gap-2 text-[var(--color-mystic-mint)]/60 hover:text-[var(--color-forsythia)] text-xs font-mono uppercase tracking-widest transition-colors"
          >
            Back to top
            <div className="w-3 h-3 bg-current" style={{ maskImage: "url('/frontend/SVGs/chevron-up.svg')", maskSize: "cover", WebkitMaskImage: "url('/frontend/SVGs/chevron-up.svg')" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
