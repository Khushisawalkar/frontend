"use client";

import { ArrowRight, Play } from "lucide-react";
import AICore from "./AICore";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-32">
      
      {/* Background Architectural Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-40 scale-125 pointer-events-none mix-blend-screen">
        <AICore />
      </div>

      {/* Foreground Typography Centered */}
      <div className="section relative z-10 flex flex-col items-center text-center">

        <span className="mono inline-flex rounded-full border border-[#FFC801]/25 bg-[#FFC801]/10 px-5 py-2 text-sm text-[#FFC801] shadow-[0_0_20px_rgba(255,200,1,0.2)]">
          AI Infrastructure • Enterprise Ready
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[1.05] md:text-[5rem] tracking-tight">
          Automate
          <span className="gradient-text mx-4">Intelligent</span><br/>
          Workflows with Enterprise AI
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 font-light">
          Design, deploy and scale AI-powered automation using a modern
          orchestration platform engineered for developers, startups and
          enterprise teams.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <button className="group relative overflow-hidden flex items-center gap-3 rounded-full bg-[#FFC801] px-8 py-4 font-semibold text-[#172B36] transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,200,1,.4)]">
            <span className="relative z-10">Start Building</span>
            <ArrowRight size={18} className="relative z-10 transition group-hover:translate-x-1" />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
          </button>

          <button className="secondary-btn flex items-center gap-3 bg-[#172B36]/50 backdrop-blur-md">
            <Play size={18} />
            Live Demo
          </button>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-3 gap-16 border-t border-white/10 pt-12 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <h3 className="mono text-4xl text-[#FFC801]">99.99%</h3>
            <p className="mt-2 text-sm text-white/50 uppercase tracking-widest">Platform Availability</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="mono text-4xl text-[#FFC801]">120+</h3>
            <p className="mt-2 text-sm text-white/50 uppercase tracking-widest">AI Integrations</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="mono text-4xl text-[#FFC801]">24/7</h3>
            <p className="mt-2 text-sm text-white/50 uppercase tracking-widest">Monitoring</p>
          </div>
        </div>

      </div>
    </section>
  );
}
