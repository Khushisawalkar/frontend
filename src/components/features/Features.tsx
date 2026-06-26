"use client";

import { useEffect, useRef } from "react";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.bento-card');

    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="features" className="relative py-32 overflow-hidden z-10">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseHeight {
          0% { transform: scaleY(0.4); }
          100% { transform: scaleY(1); }
        }
        .animate-bar { transform-origin: bottom; animation: pulseHeight 1.5s ease-in-out infinite alternate; }
        @keyframes travelDot {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
        }
        .animate-travel { animation: travelDot 4s linear infinite; }
      `}} />
      <div className="section max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Engineered for <span className="text-[#3CB3A5]">Petabyte</span> Scale
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            A proprietary streaming protocol that bypasses traditional REST limitations to deliver sub-millisecond telemetry.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Telemetry */}
          <div className="bento-card relative bg-[#172B36]/40 rounded-[2rem] p-8 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors">
            {/* Glow border pseudo-element */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(60,179,165,0.12), transparent 40%)' }} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-[#3CB3A5]/10 border border-[#3CB3A5]/20 flex items-center justify-center mb-6">
                 <div className="w-6 h-6 bg-[#3CB3A5]" style={{ maskImage: "url('/frontend/SVGs/chart-pie.svg')", maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: "url('/frontend/SVGs/chart-pie.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat" }} />
              </div>
              
              {/* Unique Animation: Chart bars growing */}
              <div className="h-32 w-full mb-8 flex items-end gap-3 px-4">
                {[40, 70, 45, 90, 60].map((height, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-[#3CB3A5]/10 to-[#3CB3A5] rounded-t-sm animate-bar" style={{ height: `${height}%`, animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>

              <h3 className="text-xl font-bold mb-3 tracking-tight">Cognitive Telemetry</h3>
              <p className="text-white/50 text-[15px] leading-relaxed">High-frequency streaming of cognitive load metrics directly to your edge nodes.</p>
            </div>
          </div>

          {/* Card 2: Neural Sync */}
          <div className="bento-card relative bg-[#172B36]/40 rounded-[2rem] p-8 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors">
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,200,1,0.12), transparent 40%)' }} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-[#FFC801]/10 border border-[#FFC801]/20 flex items-center justify-center mb-6">
                 <div className="w-6 h-6 bg-[#FFC801] transition-transform duration-700 group-hover:rotate-180" style={{ maskImage: "url('/frontend/SVGs/arrow-path.svg')", maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: "url('/frontend/SVGs/arrow-path.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat" }} />
              </div>

              {/* Unique Animation: Pulsing nodes */}
              <div className="h-32 w-full mb-8 relative flex items-center justify-center">
                 <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFC801]/30 to-transparent" />
                 <div className="absolute w-4 h-4 bg-[#FFC801] rounded-full shadow-[0_0_15px_#FFC801] animate-ping" style={{ animationDuration: '3s' }} />
                 <div className="absolute w-2 h-2 bg-[#FFC801] rounded-full" />
                 
                 <div className="absolute left-[20%] w-2 h-2 bg-[#FF9932] rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }} />
                 <div className="absolute right-[20%] w-2 h-2 bg-[#FF9932] rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '3s' }} />
              </div>

              <h3 className="text-xl font-bold mb-3 tracking-tight">Neural Sync</h3>
              <p className="text-white/50 text-[15px] leading-relaxed">Sub-millisecond synchronization across all distributed global clusters.</p>
            </div>
          </div>

          {/* Card 3: Adaptive Routing */}
          <div className="bento-card relative bg-[#172B36]/40 rounded-[2rem] p-8 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors">
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(241,246,244,0.1), transparent 40%)' }} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                 <div className="w-6 h-6 bg-white transition-transform duration-700 group-hover:rotate-90" style={{ maskImage: "url('/frontend/SVGs/cog-8-tooth.svg')", maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: "url('/frontend/SVGs/cog-8-tooth.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat" }} />
              </div>

              {/* Unique Animation: Packet traveling on path */}
              <div className="h-32 w-full mb-8 relative flex items-center justify-center overflow-hidden">
                <div className="w-[100px] h-[100px] border border-white/10 rounded-full flex items-center justify-center">
                  <div className="w-[60px] h-[60px] border border-white/5 rounded-full" />
                </div>
                <div className="absolute w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_white] animate-travel" />
              </div>

              <h3 className="text-xl font-bold mb-3 tracking-tight">Adaptive Routing</h3>
              <p className="text-white/50 text-[15px] leading-relaxed">AI-driven traffic shaping that adapts instantly to network strain and load.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
