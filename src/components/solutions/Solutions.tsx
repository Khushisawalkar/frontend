"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-32 overflow-hidden z-10">
      <div className="section max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="mb-32 text-center max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium mb-6 tracking-tight text-white/95 leading-tight">
            Designed for <br />
            <span className="text-white/60 italic font-serif">every stage of growth.</span>
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed font-light">
            Whether you are establishing your first intelligent pipeline or scaling across global clusters, the architecture adapts with quiet precision.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          
          {/* Enterprise */}
          <div className="flex flex-col md:flex-row items-center gap-20 group">
            <div className="flex-1 order-2 md:order-1 relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#114C5A]/10 to-transparent blur-3xl -z-10 rounded-full animate-breathe-slow" />
              
              <div className="w-full aspect-[4/3] rounded-[2rem] bg-white/[0.02] border border-white/5 flex items-center justify-center p-8 relative overflow-hidden backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-transform duration-1000 group-hover:scale-[1.02]">
                 
                 {/* Soft Glass Composition */}
                 <div className="relative w-48 h-56 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md shadow-2xl flex flex-col p-6 overflow-hidden animate-float">
                    <div className="w-10 h-10 rounded-full bg-[#114C5A]/30 flex items-center justify-center mb-auto">
                      <div className="w-3 h-3 rounded-full bg-[#D9E8E2]" />
                    </div>
                    <div className="space-y-3 opacity-60">
                      <div className="h-1.5 w-full bg-white/20 rounded-full" />
                      <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
                    </div>
                 </div>

                 {/* Floating accents */}
                 <div className="absolute right-[15%] top-[20%] w-16 h-16 rounded-full border border-white/5 bg-[#172B36]/50 backdrop-blur-sm animate-float-gentle" style={{ animationDelay: '1s' }} />

              </div>
            </div>
            
            <div className="flex-1 order-1 md:order-2">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-white/20" />
                <span className="text-[13px] font-medium tracking-widest uppercase text-white/60">Enterprise</span>
              </div>
              <h3 className="text-3xl font-medium mb-6 tracking-tight text-white/90 leading-snug">
                Absolute security, <br /> seamlessly integrated.
              </h3>
              <p className="text-[16px] text-white/50 mb-10 leading-relaxed font-light">
                Single-tenant environments and VPC peering ensure that your proprietary models remain deeply isolated, without compromising on orchestration velocity.
              </p>
              <Link href="/get-started" className="inline-flex items-center gap-3 text-[15px] font-medium text-white hover:text-white/70 transition-colors group/link">
                Explore Enterprise <ArrowRight size={16} className="transition-transform duration-500 group-hover/link:translate-x-2" />
              </Link>
            </div>
          </div>

          {/* Startups */}
          <div className="flex flex-col md:flex-row items-center gap-20 group">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-white/20" />
                <span className="text-[13px] font-medium tracking-widest uppercase text-white/60">Startups</span>
              </div>
              <h3 className="text-3xl font-medium mb-6 tracking-tight text-white/90 leading-snug">
                Fluid scale, <br /> from zero to infinity.
              </h3>
              <p className="text-[16px] text-white/50 mb-10 leading-relaxed font-light">
                Our serverless orchestration layer breathes with your application. It scales compute nodes softly in the background, matching your real-time demand effortlessly.
              </p>
              <Link href="/get-started" className="inline-flex items-center gap-3 text-[15px] font-medium text-white hover:text-white/70 transition-colors group/link">
                View Plans <ArrowRight size={16} className="transition-transform duration-500 group-hover/link:translate-x-2" />
              </Link>
            </div>
            
            <div className="flex-1 relative w-full">
              <div className="absolute inset-0 bg-gradient-to-l from-[#FFC801]/5 to-transparent blur-3xl -z-10 rounded-full animate-breathe-slower" />
              
              <div className="w-full aspect-[4/3] rounded-[2rem] bg-white/[0.02] border border-white/5 flex items-center justify-center p-8 relative overflow-hidden backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-transform duration-1000 group-hover:scale-[1.02]">
                 
                 {/* Soft Chart Composition */}
                 <div className="relative w-56 p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#114C5A]/10 to-transparent backdrop-blur-md shadow-2xl flex flex-col items-center animate-float">
                   <div className="text-[11px] font-mono tracking-widest text-white/40 mb-4">ACTIVE NODES</div>
                   <div className="text-5xl font-light text-white/90 mb-2">4k</div>
                   <div className="text-[13px] text-[#FFC801]/70 font-medium">+ Seamlessly adapting</div>
                 </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
