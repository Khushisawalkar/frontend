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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 z-10">
      
      <div className="section w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: Typography & Storytelling */}
        <div className="flex flex-col items-start max-w-2xl animate-fade-in">
          
          <div className="inline-flex items-center gap-3 rounded-full border border-mystic/20 bg-mystic/5 px-4 py-1.5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(217,232,226,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forsythia opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-forsythia"></span>
            </span>
            <span className="text-[13px] font-medium tracking-wide text-mystic/90">AetherFlow Intelligence is live</span>
          </div>

          <h1 className="text-[3.5rem] md:text-[5.5rem] font-medium leading-[1.05] tracking-tight mb-8 text-arctic">
            Orchestrate <br className="hidden md:block" />
            <span className="text-mystic/60 italic font-light">the future of</span> <br className="hidden md:block" />
            automation.
          </h1>

          <p className="text-[17px] md:text-[19px] leading-[1.6] text-arctic/60 font-light mb-10 max-w-xl">
            A sanctuary for your data streams. We provide the silent, powerful infrastructure that allows your artificial intelligence to breathe, scale, and connect without friction.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link 
              href="/get-started" 
              className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-forsythia to-saffron px-8 text-[16px] font-medium text-oceanic transition-all duration-500 hover:scale-[1.02] shadow-[0_10px_40px_rgba(255,200,1,0.3)] hover:shadow-[0_15px_50px_rgba(255,153,50,0.4)]"
            >
              Start building
            </Link>
            <Link 
              href="/demo" 
              className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-mystic/30 px-8 text-[15px] font-medium text-arctic transition-all duration-500 hover:bg-mystic/10"
            >
              Watch the film <ArrowRight size={16} className="text-mystic/50 group-hover:translate-x-1 group-hover:text-mystic transition-all duration-500" />
            </Link>
          </div>

        </div>

        {/* RIGHT: Abstract Pluffymaid Illustration */}
        <div className="relative w-full h-[600px] hidden lg:flex items-center justify-center animate-fade-in-delayed">
          <div ref={illustrationRef} className="relative w-full h-full transition-transform duration-[1000ms] ease-out">
            
            {/* Soft Glass Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[460px] rounded-[2rem] border border-mystic/20 bg-gradient-to-b from-mystic/10 to-transparent backdrop-blur-2xl shadow-[0_20px_60px_rgba(17,76,90,0.4)] flex flex-col items-center justify-between p-8 overflow-hidden z-20 animate-float">
               
               {/* Abstract Geometry */}
               <div className="w-full flex justify-between items-center opacity-70">
                 <div className="w-2 h-2 rounded-full bg-forsythia" />
                 <div className="h-[1px] flex-1 mx-4 bg-gradient-to-r from-transparent via-mystic/30 to-transparent" />
                 <div className="text-[10px] font-mono tracking-widest uppercase text-mystic">Sync</div>
               </div>

               {/* Central Orb */}
               <div className="relative w-32 h-32 flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full border border-saffron/30 animate-[spin_10s_linear_infinite]" />
                 <div className="absolute inset-2 rounded-full border border-forsythia/20 animate-[spin_15s_linear_infinite_reverse]" />
                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forsythia to-saffron shadow-[inset_0_0_20px_rgba(255,255,255,0.4),0_0_40px_rgba(255,153,50,0.5)] animate-breathe-slow" />
               </div>

               {/* Soft Data Waves */}
               <div className="w-full space-y-4 opacity-80">
                 <div className="h-1.5 w-full rounded-full bg-oceanic/50 overflow-hidden">
                   <div className="h-full w-2/3 bg-gradient-to-r from-mystic/20 to-mystic rounded-full animate-float-gentle" />
                 </div>
                 <div className="h-1.5 w-full rounded-full bg-oceanic/50 overflow-hidden">
                   <div className="h-full w-1/3 bg-gradient-to-r from-forsythia/20 to-forsythia rounded-full animate-float-gentle" style={{ animationDelay: '1s' }} />
                 </div>
               </div>

            </div>

            {/* Orbiting Glass Elements */}
            <div className="absolute top-[10%] right-[10%] w-32 h-32 rounded-2xl border border-mystic/10 bg-mystic/5 backdrop-blur-xl shadow-2xl z-30 animate-float-gentle flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
              <div className="w-8 h-8 rounded-full border border-forsythia/50 bg-forsythia/20 shadow-[0_0_20px_rgba(255,200,1,0.2)]" />
            </div>

            <div className="absolute bottom-[20%] left-[5%] w-40 h-24 rounded-2xl border border-saffron/10 bg-saffron/5 backdrop-blur-xl shadow-2xl z-10 animate-float flex flex-col justify-center px-6" style={{ animationDelay: '0.5s' }}>
               <div className="w-1/2 h-1 rounded-full bg-saffron/40 mb-2" />
               <div className="w-3/4 h-1 rounded-full bg-saffron/20" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
