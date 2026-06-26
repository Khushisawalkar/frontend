import React from 'react';

const featuresList = [
  {
    num: '01',
    title: 'Cognitive Telemetry',
    desc: 'High-frequency streaming of cognitive load metrics directly to your edge nodes.',
    icon: 'chart-pie.svg'
  },
  {
    num: '02',
    title: 'Neural Sync',
    desc: 'Sub-millisecond synchronization across all distributed clusters.',
    icon: 'arrow-path.svg'
  },
  {
    num: '03',
    title: 'Adaptive Routing',
    desc: 'AI-driven routing that adapts in real-time to workload and environment.',
    icon: 'cog-8-tooth.svg'
  }
];

export default function Features() {
  return (
    <section className="bg-[#0B1215] py-32 border-t border-[var(--color-mystic-mint)]/5 relative overflow-hidden">
      {/* Background glow matching the hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-[var(--color-mystic-mint)] blur-[150px] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 max-w-[1400px] relative z-10">
        
        {/* Left Side: Text */}
        <div className="lg:w-[35%] flex flex-col">
          <h2 className="text-5xl lg:text-[3.5rem] font-bold text-[var(--color-arctic-powder)] mb-6 leading-[1.1] tracking-tight">
            Built for <br />
            <span className="text-[var(--color-forsythia)]">Extreme</span> Scale.
          </h2>
          <p className="text-[var(--color-arctic-powder)]/60 text-lg leading-relaxed mb-8 max-w-sm">
            We discarded traditional REST models to build a proprietary streaming protocol that handles petabytes of behavioral data.
          </p>
          <a href="#" className="text-[#3CB3A5] font-medium flex items-center gap-2 hover:text-[#52e8d6] transition-colors w-max">
            Learn more 
            <div className="w-4 h-4 bg-current" style={{ maskImage: "url('/frontend/SVGs/arrow-trending-up.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/arrow-trending-up.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
          </a>
        </div>

        {/* Right Side: 3 Cards */}
        <div className="lg:w-[65%] grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresList.map((feat, idx) => (
            <div key={idx} className="bg-[#11191D] border border-[var(--color-mystic-mint)]/10 rounded-[1.5rem] p-8 flex flex-col hover:border-[#3CB3A5]/30 hover:bg-[#141d22] transition-colors shadow-lg">
              
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-full border border-[#3CB3A5]/20 flex items-center justify-center bg-[#182329]">
                  <div className="w-6 h-6 bg-[#3CB3A5]" style={{ maskImage: `url('/frontend/SVGs/${feat.icon}')`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: `url('/frontend/SVGs/${feat.icon}')`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                </div>
                <span className="font-mono text-sm text-[var(--color-arctic-powder)]/30 font-semibold">{feat.num}</span>
              </div>
              
              <h3 className="text-white font-semibold text-xl mb-3 tracking-tight">{feat.title}</h3>
              
              <p className="text-[var(--color-arctic-powder)]/50 text-[15px] leading-relaxed mb-10 flex-grow">
                {feat.desc}
              </p>
              
              <a href="#" className="text-[#3CB3A5] text-sm font-medium flex items-center gap-2 hover:text-[#52e8d6] transition-colors mt-auto w-max">
                Learn more 
                <div className="w-3.5 h-3.5 bg-current" style={{ maskImage: "url('/frontend/SVGs/arrow-trending-up.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/arrow-trending-up.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
