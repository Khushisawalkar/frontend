"use client";

import { useEffect, useRef } from "react";

export default function AICore() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xAxis = (innerWidth / 2 - clientX) / 30;
      const yAxis = (innerHeight / 2 - clientY) / 30;
      
      container.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center" style={{ perspective: '1200px' }}>
      <div 
        ref={containerRef}
        className="relative w-full h-full transition-transform duration-200 ease-out flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        
        {/* Core Pillar (Server Rack) */}
        <div 
          className="absolute w-48 h-80 bg-[#114C5A]/10 border border-[#FFC801]/30 flex flex-col items-center justify-evenly backdrop-blur-sm" 
          style={{ transform: 'rotateX(55deg) rotateZ(45deg) translateZ(0px)', transformStyle: 'preserve-3d', boxShadow: '0 0 120px rgba(17,76,90,0.8)' }}
        >
          {/* Top Cap */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#114C5A]/20 border border-[#FFC801]/50" style={{ transform: 'translateZ(30px)' }} />
          <div className="absolute top-0 left-0 w-full h-full bg-transparent border border-[#FFC801]/20" style={{ transform: 'translateZ(60px)' }} />
          
          <div className="w-12 h-12 bg-[#FFC801] z-10 animate-pulse" style={{ maskImage: "url('/frontend/SVGs/cube-16-solid.svg')", maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: "url('/frontend/SVGs/cube-16-solid.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", transform: 'translateZ(35px)' }} />
          
          <div className="w-12 h-12 bg-[#FF9932] z-10" style={{ maskImage: "url('/frontend/SVGs/arrow-path.svg')", maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: "url('/frontend/SVGs/arrow-path.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", transform: 'translateZ(35px)' }} />
          
          <div className="w-12 h-12 bg-[#F1F6F4] z-10" style={{ maskImage: "url('/frontend/SVGs/cog-8-tooth.svg')", maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: "url('/frontend/SVGs/cog-8-tooth.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", transform: 'translateZ(35px)' }} />
        </div>

        {/* Orbiting Packets / Satellites */}
        <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Satellite 1 */}
          <div className="absolute top-[20%] left-[20%] w-10 h-10 flex items-center justify-center rounded-full bg-[#3CB3A5]/20 border border-[#3CB3A5]/50 shadow-[0_0_30px_rgba(60,179,165,0.6)] animate-[spin_20s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }}>
            <div className="w-5 h-5 bg-[#3CB3A5]" style={{ maskImage: "url('/frontend/SVGs/chart-pie.svg')", maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: "url('/frontend/SVGs/chart-pie.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat" }} />
          </div>

          {/* Satellite 2 */}
          <div className="absolute bottom-[20%] right-[20%] w-10 h-10 flex items-center justify-center rounded-full bg-[#FFC801]/20 border border-[#FFC801]/50 shadow-[0_0_30px_rgba(255,200,1,0.6)] animate-[spin_20s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }}>
            <div className="w-5 h-5 bg-[#FFC801]" style={{ maskImage: "url('/frontend/SVGs/search.svg')", maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: "url('/frontend/SVGs/search.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat" }} />
          </div>

        </div>

        {/* Base Grid / Rings */}
        <div className="absolute w-[700px] h-[700px] border-2 border-[#114C5A]/40 rounded-full border-dashed animate-[spin_60s_linear_infinite]" style={{ transform: 'rotateX(70deg) translateZ(-100px)' }} />
        <div className="absolute w-[500px] h-[500px] border border-[#FFC801]/20 rounded-full" style={{ transform: 'rotateX(70deg) translateZ(-100px)' }} />

      </div>
    </div>
  );
}
