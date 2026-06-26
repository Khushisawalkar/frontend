"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-32 overflow-hidden z-10 border-t border-white/5">
      <div className="section max-w-7xl mx-auto px-6">
        
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Built for <span className="text-[#FFC801]">Every Stage</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Whether you're a hyper-growth startup or a Fortune 500 enterprise, AetherFlow adapts to your architectural requirements.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          
          {/* Enterprise */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#114C5A]/40 to-transparent blur-3xl -z-10" />
              <div className="w-full h-80 rounded-3xl bg-[#172B36]/60 border border-white/10 flex items-center justify-center p-8 relative overflow-hidden group hover:border-[#3CB3A5]/50 transition-colors">
                 {/* Security Shield Mockup */}
                 <div className="w-32 h-40 border border-[#3CB3A5]/50 flex flex-col items-center justify-center bg-[#3CB3A5]/10 rounded-xl relative shadow-[0_0_30px_rgba(60,179,165,0.2)] group-hover:scale-110 transition-transform duration-500">
                   <div className="w-12 h-12 bg-[#3CB3A5] mb-4" style={{ maskImage: "url('/frontend/SVGs/cube-16-solid.svg')", maskSize: "contain", WebkitMaskImage: "url('/frontend/SVGs/cube-16-solid.svg')", WebkitMaskSize: "contain" }} />
                   <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#3CB3A5] to-transparent absolute bottom-0 left-0 animate-[shimmer_2s_infinite]" />
                 </div>
                 <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 space-y-3 opacity-50 group-hover:opacity-100 transition-opacity">
                   <div className="h-2 w-full bg-white/10 rounded-full" />
                   <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                   <div className="h-2 w-5/6 bg-[#3CB3A5]/50 rounded-full" />
                 </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#3CB3A5]/30 bg-[#3CB3A5]/10 text-[#3CB3A5] text-sm font-semibold mb-6 tracking-wide">ENTERPRISE READY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Military-Grade Security & Isolation</h3>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Single-tenant clusters, VPC peering, and strict RBAC controls. We ensure your proprietary AI models and data never leave your secure perimeter.
              </p>
              <Link href="/get-started" className="flex items-center gap-2 text-white hover:text-[#3CB3A5] transition-colors font-semibold group">
                Explore Enterprise <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Startups */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#FF9932]/30 bg-[#FF9932]/10 text-[#FF9932] text-sm font-semibold mb-6 tracking-wide">HYPER-GROWTH STARTUPS</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Scale from Zero to Petabytes</h3>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Don't overprovision. Our serverless orchestration layer instantly scales compute nodes based on real-time pipeline demand, saving you thousands in idle costs.
              </p>
              <Link href="/get-started" className="flex items-center gap-2 text-white hover:text-[#FF9932] transition-colors font-semibold group">
                View Startup Plans <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-l from-[#FF9932]/20 to-transparent blur-3xl -z-10" />
              <div className="w-full h-80 rounded-3xl bg-[#172B36]/60 border border-white/10 flex items-center justify-center p-8 relative overflow-hidden group hover:border-[#FF9932]/50 transition-colors">
                 {/* Scale Chart Mockup */}
                 <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-between px-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                    {[3,5,4,7,6,9,12,10,16].map((h, i) => (
                      <div key={i} className="w-8 bg-gradient-to-t from-[#FF9932] to-transparent rounded-t-md animate-pulse" style={{ height: `${h * 10}%`, animationDelay: `${i * 0.1}s` }} />
                    ))}
                 </div>
                 <div className="relative z-10 w-56 p-6 rounded-2xl bg-[#091014]/80 border border-white/10 backdrop-blur-xl shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                   <p className="text-white/40 text-xs uppercase mb-2 tracking-widest font-semibold">Active Nodes</p>
                   <p className="text-4xl font-mono text-[#FF9932] animate-pulse">4,096</p>
                   <div className="mt-4 flex items-center gap-2 text-xs text-[#3CB3A5]">
                     <ArrowRight size={12} className="-rotate-45" /> +124% Spike handled
                   </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
