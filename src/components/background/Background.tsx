"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const floatRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const floatEl = floatRef.current;
    const gridEl = gridRef.current;

    const move = (e: MouseEvent) => {
      if (gridEl) {
        const mask = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, black 5%, transparent 100%)`;
        gridEl.style.maskImage = mask;
        gridEl.style.webkitMaskImage = mask;
      }
      
      if (floatEl) {
        const x = (e.clientX / window.innerWidth - 0.5) * 25;
        const y = (e.clientY / window.innerHeight - 0.5) * 25;

        floatEl.animate(
          {
            transform: `translate(${x}px, ${y}px)`,
          },
          {
            duration: 700,
            fill: "forwards",
            easing: "ease-out",
          }
        );
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="aurora mix-blend-screen" />
      <div className="noise" />

      <div
        ref={floatRef}
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden mix-blend-screen"
      >
        <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-[#114C5A]/40 blur-[180px]" />
        <div className="absolute right-[-250px] bottom-[-250px] h-[650px] w-[650px] rounded-full bg-[#FFC801]/15 blur-[180px]" />
        <div className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#FF9932]/10 blur-[160px]" />
      </div>

      <div
        ref={gridRef}
        className="pointer-events-none fixed inset-0 -z-20 opacity-30 transition-opacity duration-300"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
          maskImage: `radial-gradient(600px circle at 50% 50%, black 10%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(600px circle at 50% 50%, black 10%, transparent 100%)`,
        }}
      />
    </>
  );
}
