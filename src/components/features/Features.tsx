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
            <div className="w-1.5 h-16 rounded-full bg-arctic/10 animate-breathe-slow" />
            <div className="w-1.5 h-24 rounded-full bg-arctic/20 animate-breathe-slower" style={{ animationDelay: '1s' }} />
            <div className="w-1.5 h-12 rounded-full bg-arctic/10 animate-breathe-slow" style={{ animationDelay: '2s' }} />
         </div>
      )
    },
    {
      title: "Neural Sync",
      desc: "A harmonious synchronization across all global clusters, functioning as one organism.",
      icon: "arrow-path.svg",
      animation: (
         <div className="h-32 w-full mb-10 relative flex items-center justify-center pt-4">
            <div className="absolute w-24 h-24 rounded-full border border-arctic/5" />
            <div className="absolute w-16 h-16 rounded-full border border-arctic/10 animate-[spin_20s_linear_infinite]" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mystic/20 to-transparent backdrop-blur-md animate-breathe-slow" />
         </div>
      )
    },
    {
      title: "Adaptive Shape",
      desc: "Traffic naturally flows toward optimal pathways, adapting without friction.",
      icon: "cog-8-tooth.svg",
      animation: (
         <div className="h-32 w-full mb-10 relative flex items-center justify-center pt-4">
            <svg viewBox="0 0 100 100" className="w-24 h-24 text-arctic/10 overflow-visible">
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
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium mb-6 tracking-tight text-arctic/95 leading-tight">
            Crafted for <br />
            <span className="text-arctic/60 italic font-serif">quiet intelligence.</span>
          </h2>
          <p className="text-[17px] text-arctic/50 leading-relaxed font-light">
            We stripped away the noise so your infrastructure can breathe. Every interaction feels fluid and intentional.
          </p>
        </div>

        {/* Elegant Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {features.map((feat, index) => (
            <div 
              key={index}
              className="relative bg-arctic/[0.02] rounded-[2.5rem] border border-arctic/5 overflow-hidden group transition-all duration-[800ms] hover:border-arctic/10 hover:bg-arctic/[0.04] hover:-translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] flex flex-col h-full"
            >
              
              {/* Top Icon */}
              <div className="p-10 pb-0">
                <div className="w-12 h-12 flex items-center justify-center opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100">
                   <div className="w-6 h-6" style={{ backgroundColor: "#D9E8E2", maskImage: `url('/frontend/SVGs/${feat.icon}')`, maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: `url('/frontend/SVGs/${feat.icon}')`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat" }} />
                </div>
              </div>

              {/* Body Content */}
              <div className="flex-1 flex flex-col p-10 pt-8">
                {feat.animation}
                <div className="mt-auto">
                  <h3 className="text-[22px] font-medium mb-4 tracking-tight text-arctic/90">{feat.title}</h3>
                  <p className="text-arctic/50 text-[16px] leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
