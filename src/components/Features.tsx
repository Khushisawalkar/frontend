import React from 'react';

const bentoFeatures = [
  {
    title: 'Cognitive Telemetry',
    description: 'High-frequency streaming of cognitive load metrics directly to your edge nodes.',
    icon: 'chart-pie.svg',
    colSpan: 'md:col-span-2 md:row-span-2',
    visual: 'large-graph'
  },
  {
    title: 'Neural Sync',
    description: 'Sub-millisecond synchronization across all distributed analytical clusters.',
    icon: 'arrow-path.svg',
    colSpan: 'md:col-span-1 md:row-span-1',
    visual: 'minimal'
  },
  {
    title: 'Precision Config',
    description: 'Declarative configuration for complex behavioral logic routing.',
    icon: 'cog-8-tooth.svg',
    colSpan: 'md:col-span-1 md:row-span-1',
    visual: 'minimal'
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-[var(--color-arctic-powder)] relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[var(--color-nocturnal-expedition)] font-bold tracking-widest uppercase mb-4 block">01 / Architecture</span>
            <h2 className="text-5xl md:text-6xl font-black text-[var(--color-oceanic-noir)] tracking-tight leading-tight">
              Built for <br/><span className="text-[var(--color-nocturnal-expedition)]">Extreme Scale.</span>
            </h2>
          </div>
          <p className="text-xl text-[var(--color-oceanic-noir)]/70 max-w-md font-light">
            We discarded traditional REST models to build a proprietary streaming protocol that handles petabytes of behavioral data.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {bentoFeatures.map((feat, idx) => (
            <div 
              key={idx}
              className={`group relative overflow-hidden rounded-[2rem] bg-[var(--color-mystic-mint)] border border-[var(--color-mystic-mint)]/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(17,76,90,0.1)] flex flex-col justify-between p-10 ${feat.colSpan}`}
            >
              {/* Dynamic Deep Saffron Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-[var(--color-deep-saffron)] rounded-[2rem] opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 pointer-events-none" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }} />
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-oceanic-noir)] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl">
                  <div 
                    className="w-7 h-7 bg-[var(--color-forsythia)]"
                    style={{ maskImage: `url('/SVGs/${feat.icon}')`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: `url('/SVGs/${feat.icon}')`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} 
                  />
                </div>
                <span className="font-mono text-[var(--color-nocturnal-expedition)]/40 text-sm font-bold">
                  0{idx + 1}
                </span>
              </div>

              <div className="relative z-10 mt-auto pt-8">
                <h3 className="text-3xl font-bold text-[var(--color-oceanic-noir)] mb-4 tracking-tight">{feat.title}</h3>
                <p className="text-lg text-[var(--color-oceanic-noir)]/70 leading-relaxed font-light max-w-md">{feat.description}</p>
              </div>

              {/* Specific Visuals for Bento Box */}
              {feat.visual === 'large-graph' && (
                <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--color-nocturnal-expedition)]" style={{ maskImage: "url('/SVGs/arrow-path.svg')", maskSize: "cover", WebkitMaskImage: "url('/SVGs/arrow-path.svg')", WebkitMaskSize: "cover" }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
