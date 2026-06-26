"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const move = (e: MouseEvent) => {
      glow.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        {
          duration: 250,
          easing: "ease-out",
          fill: "forwards",
        }
      );
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
      pointer-events-none
      fixed
      z-0
      h-[420px]
      w-[420px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      opacity-30
      blur-[140px]
      "
      style={{
        background:
          "radial-gradient(circle, rgba(255,200,1,.28) 0%, rgba(17,76,90,.18) 40%, transparent 75%)",
      }}
    />
  );
}
