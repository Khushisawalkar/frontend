"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const features = [
    {
      title: "Cognitive Telemetry",
      desc: "Streams of cognitive data flow quietly to the edge, creating a seamless connection.",
      icon: "chart-pie.svg",
      animation: (
         <div className="h-32 w-full mb-10 flex items-end justify-center gap-6 px-4 pt-4">
            <div className="w-1.5 h-16 rounded-full bg-white/10 animate-breathe-slow" />
            <div className="w-1.5 h-24 rounded-full bg-white/20 animate-breathe-slower" style={{ animationDelay: '1s' }} />
            <div className="w-1.5 h-12 rounded-full bg-white/10 animate-breathe-slow" style={{ animationDelay: '2s' }} />
         </div>
      )
    },
    {
      title: "Neural Sync",
      desc: "A harmonious synchronization across all global clusters, functioning as one organism.",
      icon: "arrow-path.svg",
      animation: (
         <div className="h-32 w-full mb-10 relative flex items-center justify-center pt-4">
            <div className="absolute w-24 h-24 rounded-full border border-white/5" />
            <div className="absolute w-16 h-16 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D9E8E2]/20 to-transparent backdrop-blur-md animate-breathe-slow" />
         </div>
      )
    },
    {
      title: "Adaptive Shape",
      desc: "Traffic naturally flows toward optimal pathways, adapting without friction.",
      icon: "cog-8-tooth.svg",
      animation: (
         <div className="h-32 w-full mb-10 relative flex items-center justify-center pt-4">
            <svg viewBox="0 0 100 100" className="w-24 h-24 text-white/10 overflow-visible">
               <path d="M10,50 Q50,10 90,50 T170,50" fill="none" stroke="currentColor" strokeWidth="2" className="animate-float" />
               <circle cx="50" cy="50" r="4" fill="#D9E8E2" opacity="0.5" className="animate-breathe-slow" />
            </svg>
         </div>
      )
    }
  ];

  return (
    <section id="features" className="relative py-32 overflow-hidden z-10">
      <div className="section max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium mb-6 tracking-tight text-white/95 leading-tight">
            Crafted for <br />
            <span className="text-white/60 italic font-serif">quiet intelligence.</span>
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed font-light">
            We stripped away the noise so your infrastructure can breathe. Every interaction feels fluid and intentional.
          </p>
        </div>

        {/* Bento Grid (Desktop) / Accordion (Mobile) Wrapper - CONTEXT LOCK RETAINED */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {features.map((feat, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index}
                onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
                className={`relative bg-white/[0.02] rounded-[2.5rem] border overflow-hidden group transition-all duration-[600ms] ease-out ${
                  isActive ? "border-white/10 bg-white/[0.04] shadow-[0_30px_60px_rgba(0,0,0,0.1)]" : "border-white/5"
                }`}
              >
                
                {/* Accordion Header (Mobile Clickable Area) */}
                <div 
                  className="relative z-10 flex items-center justify-between p-8 md:p-10 cursor-pointer md:cursor-default"
                  onClick={() => window.innerWidth < 768 && setActiveIndex(index)}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 flex items-center justify-center opacity-60 transition-opacity duration-500 group-hover:opacity-100">
                       <div className="w-5 h-5 transition-transform duration-1000 group-hover:rotate-180" style={{ backgroundColor: "#D9E8E2", maskImage: `url('/frontend/SVGs/${feat.icon}')`, maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: `url('/frontend/SVGs/${feat.icon}')`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat" }} />
                    </div>
                    <h3 className="text-[19px] font-medium tracking-tight md:hidden text-white/90">{feat.title}</h3>
                  </div>
                  <ChevronDown className={`md:hidden transition-transform duration-500 ${isActive ? "rotate-180 text-white" : "text-white/30"}`} />
                </div>

                {/* Body Content (Desktop: Always Visible, Mobile: Accordion Body) */}
                <div 
                   className={`relative z-10 flex flex-col transition-[max-height,opacity,padding] duration-[600ms] ease-out overflow-hidden md:max-h-[600px] md:opacity-100 md:px-10 md:pb-10 ${
                     isActive ? "max-h-[600px] opacity-100 px-8 pb-8" : "max-h-0 opacity-0 px-8 pb-0 md:px-10 md:pb-10"
                   }`}
                >
                  {feat.animation}
                  <h3 className="text-[22px] font-medium mb-4 tracking-tight hidden md:block text-white/90">{feat.title}</h3>
                  <p className="text-white/50 text-[16px] leading-relaxed font-light">{feat.desc}</p>
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  );
}
