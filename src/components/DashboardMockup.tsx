import React, { memo } from 'react';

const DashboardMockup = memo(() => {
  return (
    <section className="py-32 bg-[var(--color-oceanic-noir)] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-nocturnal-expedition)] opacity-20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-mono text-[var(--color-forsythia)] font-bold tracking-widest uppercase mb-4 block">02 / Telemetry</span>
          <h2 className="text-5xl md:text-6xl font-black text-[var(--color-arctic-powder)] tracking-tight leading-tight">
            Observe the <span className="italic font-light text-[var(--color-mystic-mint)]">Invisible.</span>
          </h2>
        </div>

        {/* Untethered Floating Dashboard UI */}
        <div className="relative max-w-6xl mx-auto h-[700px] md:h-[600px]">
          
          {/* Main Back Panel */}
          <div className="absolute inset-4 md:inset-8 top-12 bg-[var(--color-nocturnal-expedition)]/40 backdrop-blur-3xl rounded-[2.5rem] border border-[var(--color-mystic-mint)]/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-arctic/5 to-transparent pointer-events-none" />
            
            {/* Header */}
            <div className="h-20 border-b border-[var(--color-mystic-mint)]/10 flex items-center px-8 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--color-mystic-mint)]/30" />
                <div className="w-3 h-3 rounded-full bg-[var(--color-mystic-mint)]/30" />
                <div className="w-3 h-3 rounded-full bg-[var(--color-mystic-mint)]/30" />
              </div>
              <div className="font-mono text-xs text-[var(--color-mystic-mint)]/50 tracking-widest uppercase">
                Cluster Status: Optimal
              </div>
            </div>

            {/* Grid Area */}
            <div className="p-8 h-full flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-24 rounded-2xl bg-oceanic/20 border border-[var(--color-mystic-mint)]/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-nocturnal-expedition)]/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    <div className="p-4 flex flex-col justify-between h-full">
                      <span className="font-mono text-[var(--color-mystic-mint)]/40 text-xs">METRIC_0{i+1}</span>
                      <span className="font-mono text-[var(--color-arctic-powder)] text-2xl font-bold">
                        {Math.floor(Math.random() * 900) + 100}.{Math.floor(Math.random() * 99)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Massive Data Vis Area */}
              <div className="flex-1 rounded-2xl bg-oceanic/40 border border-[var(--color-mystic-mint)]/5 relative overflow-hidden flex items-end">
                {/* SVG Data Stream Animation */}
                <div className="w-full h-[80%] flex items-end gap-1 px-4 opacity-50">
                  {[...Array(40)].map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-[var(--color-forsythia)] rounded-t-sm"
                      style={{ 
                        height: `${Math.random() * 80 + 20}%`,
                        animation: `pulseHeight 2s ease-in-out infinite alternate ${Math.random() * 2}s`
                      }} 
                    />
                  ))}
                </div>
                {/* Floating Metric Card Overlay */}
                <div className="absolute top-6 left-6 p-6 rounded-2xl bg-[var(--color-oceanic-noir)] border border-[var(--color-mystic-mint)]/20 shadow-2xl backdrop-blur-xl">
                  <div className="font-mono text-[var(--color-mystic-mint)] text-xs mb-2 uppercase">Throughput</div>
                  <div className="text-4xl font-bold text-[var(--color-arctic-powder)] font-mono">1.2 TB/s</div>
                  <div className="flex items-center gap-2 mt-2">
                     <div className="w-4 h-4 bg-[var(--color-deep-saffron)]" style={{ maskImage: "url('/frontend/SVGs/arrow-trending-up.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/arrow-trending-up.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                     <span className="text-[var(--color-deep-saffron)] text-sm font-mono">+9.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping Floating Panel (Untethered) */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-72 md:w-80 h-auto p-6 md:p-8 bg-[var(--color-oceanic-noir)] rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-[var(--color-mystic-mint)]/20 z-20 flex flex-col justify-between transform transition-transform duration-700 hover:-translate-y-4 hover:scale-105">
            <div className="w-12 h-12 bg-[var(--color-forsythia)] rounded-xl flex items-center justify-center mb-6">
               <div className="w-6 h-6 bg-[var(--color-oceanic-noir)]" style={{ maskImage: "url('/frontend/SVGs/cog-8-tooth.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/cog-8-tooth.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-[var(--color-arctic-powder)] mb-2">System Core</h4>
              <p className="text-[var(--color-mystic-mint)]/70 text-sm font-light">All secondary nodes are responding within expected parameters.</p>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes pulseHeight {
          0% { transform: scaleY(0.8); transform-origin: bottom; opacity: 0.5; }
          100% { transform: scaleY(1.2); transform-origin: bottom; opacity: 1; }
        }
      `}} />
    </section>
  );
});

DashboardMockup.displayName = 'DashboardMockup';
export default DashboardMockup;
