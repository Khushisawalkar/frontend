"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;

      element.animate(
        {
          transform: `translate(${x}px, ${y}px)`,
        },
        {
          duration: 700,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Aurora */}
      <div className="aurora" />

      {/* Noise */}
      <div className="noise" />

      {/* Floating Gradient */}
      <div
        ref={ref}
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-[#114C5A]/40 blur-[180px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[650px] w-[650px] rounded-full bg-[#FFC801]/15 blur-[180px]" />

        <div className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#FF9932]/10 blur-[160px]" />
      </div>

      {/* Grid Overlay */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px",
        }}
      />
    </>
  );
}
