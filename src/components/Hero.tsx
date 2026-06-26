import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#091014] flex items-center pt-24 overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1215] to-[#0A1215] pointer-events-none" />

      <div className="container mx-auto px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full max-w-[1400px]">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col items-start justify-center h-full pt-12 lg:pt-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--color-forsythia)] shadow-[0_0_8px_rgba(255,200,1,0.8)]" />
            <span className="font-mono text-[var(--color-forsythia)] text-xs font-bold tracking-[0.15em] uppercase">
              AI INFRASTRUCTURE v2.0
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] font-bold text-[var(--color-arctic-powder)] mb-6 tracking-tight leading-[1.05]">
            Compute <br/>
            <span className="text-[var(--color-forsythia)]">Intelligently.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--color-arctic-powder)]/60 mb-10 max-w-[28rem] leading-relaxed font-light">
            The foundational data flow architecture for billion-dollar enterprises. Automate, scale, and conquer with extreme precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-[#0F171A] bg-[var(--color-forsythia)] hover:bg-[#ffb400] transition-colors">
              Initialize Cluster
              <div className="w-4 h-4 bg-current" style={{ maskImage: "url('/frontend/SVGs/arrow-trending-up.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/arrow-trending-up.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
            </button>
            
            <button className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-lg font-medium text-[var(--color-arctic-powder)] border border-[var(--color-mystic-mint)]/20 hover:bg-[#F1F6F4]/5 transition-colors bg-[#172B36]/30">
              Read the Docs
              <span className="flex items-center justify-center w-5 h-5 rounded bg-[#F1F6F4]/10 text-[10px] font-mono border border-[#F1F6F4]/10 text-[var(--color-arctic-powder)]/60">F</span>
            </button>
          </div>

          {/* Bottom Left indicator */}
          <div className="mt-auto pt-12 lg:pt-24 w-full max-w-sm">
            <div className="font-mono text-[var(--color-forsythia)] text-sm mb-4 tracking-wide">
              <span className="font-bold">01</span> <span className="text-[var(--color-arctic-powder)]/40">/ Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 bg-[var(--color-forsythia)] rounded-full w-24 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-forsythia)] translate-x-1" />
              </div>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-1 bg-[var(--color-mystic-mint)]/10 rounded-full w-12 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-mystic-mint)]/20 translate-x-0.5" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Abstract Diagram */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
           {/* Center Core */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              {/* Stacked isometric boxes illusion */}
              <div className="relative w-32 h-32 transform hover:scale-105 transition-transform duration-700">
                <div className="absolute -top-6 left-0 w-full h-full bg-[#0D181C] border border-[var(--color-forsythia)]/20 rounded-xl" />
                <div className="absolute -top-3 left-0 w-full h-full bg-[#111F24] border border-[var(--color-forsythia)]/40 rounded-xl" />
                <div className="absolute top-0 left-0 w-full h-full bg-[#15252A] border border-[var(--color-forsythia)] rounded-xl shadow-[0_0_60px_rgba(255,200,1,0.15)] flex items-center justify-center">
                  <div className="w-12 h-12 bg-[var(--color-forsythia)]" style={{ maskImage: "url('/frontend/SVGs/cube-16-solid.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/cube-16-solid.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                </div>
              </div>
           </div>

           {/* Floating nodes */}
           {/* Node 1: Ingest (Top Left) */}
           <div className="absolute top-[10%] left-[25%] z-30 transform hover:-translate-y-2 transition-transform duration-500">
              <div className="bg-[#0C1519] border border-[var(--color-mystic-mint)]/20 rounded-xl p-4 flex flex-col items-center justify-center shadow-2xl w-28 h-28">
                <div className="w-5 h-5 bg-[#3CB3A5] mb-2" style={{ maskImage: "url('/frontend/SVGs/cog-8-tooth.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/cog-8-tooth.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                <span className="text-[var(--color-arctic-powder)] font-semibold text-xs tracking-wide">Ingest</span>
                <span className="text-[var(--color-arctic-powder)]/40 text-[9px] mt-1">Real-time Data</span>
              </div>
              {/* Connecting Line */}
              <div className="absolute top-full left-[60%] w-[1.5px] h-32 bg-gradient-to-b from-[#3CB3A5]/50 to-[var(--color-forsythia)]/50 origin-top rotate-[-45deg]" />
           </div>

           {/* Node 2: Process (Top Right) */}
           <div className="absolute top-[5%] right-[20%] z-30 transform hover:-translate-y-2 transition-transform duration-500">
              <div className="bg-[#0C1519] border border-[var(--color-mystic-mint)]/20 rounded-xl p-4 flex flex-col items-center justify-center shadow-2xl w-28 h-28">
                <div className="w-5 h-5 bg-[#3CB3A5] mb-2" style={{ maskImage: "url('/frontend/SVGs/chart-pie.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/chart-pie.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                <span className="text-[var(--color-arctic-powder)] font-semibold text-xs tracking-wide">Process</span>
                <span className="text-[var(--color-arctic-powder)]/40 text-[9px] mt-1">AI Pipelines</span>
              </div>
              {/* Connecting Line */}
              <div className="absolute top-full right-[60%] w-[1.5px] h-36 bg-gradient-to-b from-[#3CB3A5]/50 to-[var(--color-forsythia)]/50 origin-top rotate-[45deg]" />
           </div>

           {/* Node 3: Sync (Mid Left) */}
           <div className="absolute top-[35%] left-[5%] z-30 transform hover:-translate-x-2 transition-transform duration-500">
              <div className="bg-[#0C1519] border border-[var(--color-mystic-mint)]/20 rounded-xl p-4 flex flex-col items-center justify-center shadow-2xl w-28 h-28">
                <div className="w-5 h-5 bg-[#3CB3A5] mb-2" style={{ maskImage: "url('/frontend/SVGs/arrow-path.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/arrow-path.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                <span className="text-[var(--color-arctic-powder)] font-semibold text-xs tracking-wide">Sync</span>
                <span className="text-[var(--color-arctic-powder)]/40 text-[9px] mt-1">Edge Nodes</span>
              </div>
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-full w-32 h-[1.5px] bg-gradient-to-r from-[#3CB3A5]/50 to-[var(--color-forsythia)]/50 origin-left rotate-[15deg]" />
           </div>

           {/* Node 4: Store (Mid Right) */}
           <div className="absolute top-[35%] right-[5%] z-30 transform hover:translate-x-2 transition-transform duration-500">
              <div className="bg-[#0C1519] border border-[var(--color-mystic-mint)]/20 rounded-xl p-4 flex flex-col items-center justify-center shadow-2xl w-28 h-28">
                <div className="w-5 h-5 bg-[#3CB3A5] mb-2" style={{ maskImage: "url('/frontend/SVGs/search.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/search.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                <span className="text-[var(--color-arctic-powder)] font-semibold text-xs tracking-wide">Store</span>
                <span className="text-[var(--color-arctic-powder)]/40 text-[9px] mt-1">Vectorized DB</span>
              </div>
              {/* Connecting Line */}
              <div className="absolute top-1/2 right-full w-32 h-[1.5px] bg-gradient-to-l from-[#3CB3A5]/50 to-[var(--color-forsythia)]/50 origin-right rotate-[-15deg]" />
           </div>

           {/* Node 5: Secure (Bottom Left) */}
           <div className="absolute bottom-[10%] left-[25%] z-30 transform hover:translate-y-2 transition-transform duration-500">
              <div className="bg-[#0C1519] border border-[var(--color-mystic-mint)]/20 rounded-xl p-4 flex flex-col items-center justify-center shadow-2xl w-28 h-28">
                <div className="w-5 h-5 bg-[#3CB3A5] mb-2" style={{ maskImage: "url('/frontend/SVGs/x-mark.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/x-mark.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                <span className="text-[var(--color-arctic-powder)] font-semibold text-xs tracking-wide">Secure</span>
                <span className="text-[var(--color-arctic-powder)]/40 text-[9px] mt-1">Zero Trust</span>
              </div>
              {/* Connecting Line */}
              <div className="absolute bottom-[90%] left-[60%] w-[1.5px] h-32 bg-gradient-to-t from-[#3CB3A5]/50 to-[var(--color-forsythia)]/50 origin-bottom rotate-[45deg]" />
           </div>

           {/* Node 6: Analyze (Bottom Right) */}
           <div className="absolute bottom-[10%] right-[20%] z-30 transform hover:translate-y-2 transition-transform duration-500">
              <div className="bg-[#0C1519] border border-[var(--color-mystic-mint)]/20 rounded-xl p-4 flex flex-col items-center justify-center shadow-2xl w-28 h-28">
                <div className="w-5 h-5 bg-[#3CB3A5] mb-2" style={{ maskImage: "url('/frontend/SVGs/arrow-trending-up.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/arrow-trending-up.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                <span className="text-[var(--color-arctic-powder)] font-semibold text-xs tracking-wide">Analyze</span>
                <span className="text-[var(--color-arctic-powder)]/40 text-[9px] mt-1">Insight Engine</span>
              </div>
              {/* Connecting Line */}
              <div className="absolute bottom-[90%] right-[60%] w-[1.5px] h-32 bg-gradient-to-t from-[#3CB3A5]/50 to-[var(--color-forsythia)]/50 origin-bottom rotate-[-45deg]" />
           </div>

           {/* Background decorative waves */}
           <div className="absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-screen">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[var(--color-mystic-mint)]/10 rounded-full animate-[spin_60s_linear_infinite]" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[var(--color-mystic-mint)]/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
             {/* Simulating the glowing particle clouds from image */}
             <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#3CB3A5] rounded-full blur-[100px] opacity-20" />
             <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--color-forsythia)] rounded-full blur-[100px] opacity-10" />
           </div>

        </div>
      </div>
    </section>
  );
}
