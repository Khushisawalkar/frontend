"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!illustrationRef.current || window.innerWidth < 768) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      
      illustrationRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      
      <div className="section w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: Typography & Storytelling */}
        <div className="flex flex-col items-start max-w-2xl animate-fade-in">
          
          <div className="inline-flex items-center gap-3 rounded-full border border-[#F1F6F4]/10 bg-[#F1F6F4]/5 px-4 py-1.5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9E8E2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9E8E2]"></span>
            </span>
            <span className="text-[13px] font-medium tracking-wide text-[#F1F6F4]/80">AetherFlow Intelligence is live</span>
          </div>

          <h1 className="text-[3.5rem] md:text-[5rem] font-medium leading-[1.05] tracking-tight mb-8 text-[#F1F6F4]/95">
            Orchestrate <br className="hidden md:block" />
            <span className="text-[#F1F6F4]/60">the future of</span> <br className="hidden md:block" />
            automation.
          </h1>

          <p className="text-[17px] md:text-[19px] leading-[1.6] text-[#F1F6F4]/50 font-normal mb-10 max-w-xl">
            A sanctuary for your data streams. We provide the silent, powerful infrastructure that allows your artificial intelligence to breathe, scale, and connect without friction.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link 
              href="/get-started" 
              className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#F1F6F4] px-8 text-[15px] font-medium text-[#172B36] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
            >
              Start building
            </Link>
            <Link 
              href="/demo" 
              className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#F1F6F4]/15 px-8 text-[15px] font-medium text-[#F1F6F4] transition-all duration-500 hover:bg-[#F1F6F4]/5"
            >
              Watch the film <ArrowRight size={16} className="text-[#F1F6F4]/50 group-hover:translate-x-1 group-hover:text-[#F1F6F4] transition-all duration-500" />
            </Link>
          </div>

        </div>

        {/* RIGHT: Abstract Pluffymaid Illustration */}
        <div className="relative w-full h-[600px] hidden lg:flex items-center justify-center animate-fade-in-delayed">
          <div ref={illustrationRef} className="relative w-full h-full transition-transform duration-[1000ms] ease-out">
            
            {/* Soft Glass Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[460px] rounded-[2rem] border border-[#F1F6F4]/10 bg-gradient-to-b from-[#F1F6F4]/10 to-transparent backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col items-center justify-between p-8 overflow-hidden z-20 animate-float">
               
               {/* Abstract Geometry */}
               <div className="w-full flex justify-between items-center opacity-40">
                 <div className="w-2 h-2 rounded-full bg-[#F1F6F4]/50" />
                 <div className="h-[1px] flex-1 mx-4 bg-gradient-to-r from-transparent via-[#F1F6F4]/20 to-transparent" />
                 <div className="text-[10px] font-mono tracking-widest uppercase">Sync</div>
               </div>

               {/* Central Orb */}
               <div className="relative w-32 h-32 flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full border border-[#D9E8E2]/20 animate-[spin_10s_linear_infinite]" />
                 <div className="absolute inset-2 rounded-full border border-[#D9E8E2]/10 animate-[spin_15s_linear_infinite_reverse]" />
                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#114C5A] to-transparent shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md animate-breathe-slow" />
               </div>

               {/* Soft Data Waves */}
               <div className="w-full space-y-4 opacity-50">
                 <div className="h-1.5 w-full rounded-full bg-[#F1F6F4]/5 overflow-hidden">
                   <div className="h-full w-2/3 bg-gradient-to-r from-transparent to-[#D9E8E2]/40 rounded-full animate-float-gentle" />
                 </div>
                 <div className="h-1.5 w-full rounded-full bg-[#F1F6F4]/5 overflow-hidden">
                   <div className="h-full w-1/3 bg-gradient-to-r from-transparent to-[#D9E8E2]/40 rounded-full animate-float-gentle" style={{ animationDelay: '1s' }} />
                 </div>
               </div>

            </div>

            {/* Orbiting Glass Elements */}
            <div className="absolute top-[10%] right-[10%] w-32 h-32 rounded-2xl border border-[#F1F6F4]/5 bg-[#F1F6F4]/5 backdrop-blur-xl shadow-2xl z-30 animate-float-gentle flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
              <div className="w-8 h-8 rounded-full border border-[#FFC801]/30 bg-[#FFC801]/10" />
            </div>

            <div className="absolute bottom-[20%] left-[5%] w-40 h-24 rounded-2xl border border-[#F1F6F4]/5 bg-[#114C5A]/20 backdrop-blur-xl shadow-2xl z-10 animate-float flex flex-col justify-center px-6" style={{ animationDelay: '0.5s' }}>
               <div className="w-1/2 h-1 rounded-full bg-[#F1F6F4]/20 mb-2" />
               <div className="w-3/4 h-1 rounded-full bg-[#F1F6F4]/10" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
