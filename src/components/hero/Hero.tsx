"use client";

import { ArrowRight, Play } from "lucide-react";
import AICore from "./AICore";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="section grid grid-cols-1 items-center gap-20 pt-32 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="mono inline-flex rounded-full border border-[#FFC801]/25 bg-[#FFC801]/10 px-5 py-2 text-sm text-[#FFC801]">
            AI Infrastructure • Enterprise Ready
          </span>

          <h1 className="mt-8 max-w-2xl text-5xl font-black leading-[1.05] md:text-7xl">
            Automate
            <span className="gradient-text"> Intelligent </span>
            Workflows
            with
            Enterprise AI
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            Design, deploy and scale AI-powered automation using a modern
            orchestration platform engineered for developers, startups and
            enterprise teams.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <button className="primary-btn flex items-center gap-3">
              Start Building
              <ArrowRight size={18} />
            </button>

            <button className="secondary-btn flex items-center gap-3">
              <Play size={18} />
              Live Demo
            </button>

          </div>

          {/* Stats */}

          <div className="mt-20 grid grid-cols-3 gap-10">

            <div>
              <h3 className="mono text-4xl text-[#FFC801]">
                99.99%
              </h3>

              <p className="mt-2 text-sm text-white/60">
                Platform Availability
              </p>
            </div>

            <div>
              <h3 className="mono text-4xl text-[#FFC801]">
                120+
              </h3>

              <p className="mt-2 text-sm text-white/60">
                AI Integrations
              </p>
            </div>

            <div>
              <h3 className="mono text-4xl text-[#FFC801]">
                24/7
              </h3>

              <p className="mt-2 text-sm text-white/60">
                Monitoring
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">

          <AICore />

        </div>

      </div>
    </section>
  );
}
