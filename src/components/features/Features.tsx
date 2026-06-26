"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.bento-card');

    const handleMouseMove = (e: MouseEvent) => {
      // Glow effect only runs on desktop to save mobile performance
      if (window.innerWidth < 768) return;
      
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

  const features = [
    {
      title: "Cognitive Telemetry",
      desc: "High-frequency streaming of cognitive load metrics directly to your edge nodes.",
      icon: "chart-pie.svg",
      color: "#3CB3A5",
      animation: (
         <div className="h-32 w-full mb-8 flex items-end gap-3 px-4 pt-4">
            {[40, 70, 45, 90, 60].map((height, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-[#3CB3A5]/10 to-[#3CB3A5] rounded-t-sm animate-bar" style={{ height: `${height}%`, animationDelay: `${i * 0.2}s` }} />
            ))}
         </div>
      )
    },
    {
      title: "Neural Sync",
      desc: "Sub-millisecond synchronization across all distributed global clusters.",
      icon: "arrow-path.svg",
      color: "#FFC801",
      animation: (
         <div className="h-32 w-full mb-8 relative flex items-center justify-center pt-4">
             <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFC801]/30 to-transparent" />
             <div className="absolute w-4 h-4 bg-[#FFC801] rounded-full shadow-[0_0_15px_#FFC801] animate-ping" style={{ animationDuration: '3s' }} />
             <div className="absolute w-2 h-2 bg-[#FFC801] rounded-full" />
             <div className="absolute left-[20%] w-2 h-2 bg-[#FF9932] rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }} />
             <div className="absolute right-[20%] w-2 h-2 bg-[#FF9932] rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '3s' }} />
         </div>
      )
    },
    {
      title: "Adaptive Routing",
      desc: "AI-driven traffic shaping that adapts instantly to network strain and load.",
      icon: "cog-8-tooth.svg",
      color: "#F1F6F4",
      animation: (
         <div className="h-32 w-full mb-8 relative flex items-center justify-center overflow-hidden pt-4">
            <div className="w-[100px] h-[100px] border border-white/10 rounded-full flex items-center justify-center">
              <div className="w-[60px] h-[60px] border border-white/5 rounded-full" />
            </div>
            <div className="absolute w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_white] animate-travel" />
         </div>
      )
    }
  ];

  return (
    <section id="features" className="relative py-32 overflow-hidden z-10 border-t border-white/5">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseHeight { 0% { transform: scaleY(0.4); } 100% { transform: scaleY(1); } }
        .animate-bar { transform-origin: bottom; animation: pulseHeight 1.5s ease-in-out infinite alternate; }
        @keyframes travelDot { 0% { transform: rotate(0deg) translateX(50px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); } }
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

        {/* Bento Grid (Desktop) / Accordion (Mobile) Wrapper */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {features.map((feat, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index}
                onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
                className={`bento-card relative bg-[#172B36]/40 rounded-[2rem] border overflow-hidden group transition-all duration-[400ms] ease-in-out ${
                  isActive ? "border-white/20 bg-[#172B36]/60 shadow-xl" : "border-white/5"
                }`}
              >
                {/* Glow border pseudo-element (Desktop only) */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block" style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${feat.color}15, transparent 40%)` }} />
                
                {/* Accordion Header (Mobile Clickable Area) */}
                <div 
                  className="relative z-10 flex items-center justify-between p-6 md:p-8 cursor-pointer md:cursor-default"
                  onClick={() => window.innerWidth < 768 && setActiveIndex(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors`} style={{ borderColor: `${feat.color}30`, backgroundColor: `${feat.color}10` }}>
                       <div className="w-6 h-6 transition-transform duration-700 group-hover:rotate-180" style={{ backgroundColor: feat.color, maskImage: `url('/frontend/SVGs/${feat.icon}')`, maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: `url('/frontend/SVGs/${feat.icon}')`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat" }} />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight md:hidden">{feat.title}</h3>
                  </div>
                  <ChevronDown className={`md:hidden transition-transform duration-300 ${isActive ? "rotate-180 text-white" : "text-white/30"}`} />
                </div>

                {/* Body Content (Desktop: Always Visible, Mobile: Accordion Body) */}
                <div 
                   className={`relative z-10 flex flex-col transition-[max-height,opacity,padding] duration-[400ms] ease-in-out overflow-hidden md:max-h-[500px] md:opacity-100 md:px-8 md:pb-8 ${
                     isActive ? "max-h-[500px] opacity-100 px-6 pb-6" : "max-h-0 opacity-0 px-6 pb-0 md:px-8 md:pb-8"
                   }`}
                >
                  {feat.animation}
                  <h3 className="text-xl font-bold mb-3 tracking-tight hidden md:block">{feat.title}</h3>
                  <p className="text-white/50 text-[15px] leading-relaxed">{feat.desc}</p>
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  );
}
