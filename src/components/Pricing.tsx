import React from 'react';

const plans = [
  {
    name: 'Developer',
    price: '$0',
    featured: false,
    features: ['10GB Ingestion', '48hr Retention', 'Community Support']
  },
  {
    name: 'Scale',
    price: '$299',
    featured: true,
    features: ['1TB Ingestion', '30 Day Retention', 'Dedicated Slack Channel', 'Custom Routing']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    featured: false,
    features: ['Unlimited Ingestion', 'Infinite Retention', 'SLA Guarantee']
  }
];

export default function Pricing() {
  return (
    <section className="py-32 bg-[var(--color-oceanic-noir)] relative overflow-hidden">
      {/* Slow moving gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-nocturnal-expedition)] via-[var(--color-oceanic-noir)] to-[var(--color-oceanic-noir)] opacity-50 bg-[length:200%_200%] animate-[gradientShift_15s_ease_infinite]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="font-mono text-[var(--color-mystic-mint)]/60 font-bold tracking-widest uppercase mb-4 block">03 / Pricing</span>
          <h2 className="text-5xl md:text-6xl font-black text-[var(--color-arctic-powder)] tracking-tight leading-tight">
            Predictable <span className="text-[var(--color-deep-saffron)]">Scale.</span>
          </h2>
        </div>

        {/* Tiered Overlapping Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-8 md:gap-0">
          
          {/* Plan 1 */}
          <div className="w-full md:w-1/3 p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-[var(--color-mystic-mint)]/10 md:translate-x-8 md:rounded-r-none z-0 hover:bg-white/10 transition-colors">
            <h3 className="font-mono text-xl text-[var(--color-arctic-powder)] mb-2">{plans[0].name}</h3>
            <div className="font-mono text-5xl font-black text-[var(--color-arctic-powder)] mb-8">{plans[0].price}</div>
            <ul className="space-y-4 mb-8">
              {plans[0].features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-[var(--color-mystic-mint)]/80 font-mono text-sm">
                  <div className="w-3 h-3 bg-[var(--color-mystic-mint)]/50 min-w-3" style={{ maskImage: "url('/frontend/SVGs/chevron-right.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/chevron-right.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                  {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl font-mono text-sm font-bold bg-white/5 text-[var(--color-arctic-powder)] hover:bg-white/10 transition-colors border border-[var(--color-mystic-mint)]/20">
              Start Building
            </button>
          </div>

          {/* Plan 2 (Featured & Overlapping) */}
          <div className="w-full md:w-[40%] p-10 rounded-[2.5rem] bg-[var(--color-nocturnal-expedition)] border border-[var(--color-forsythia)]/50 shadow-[0_30px_80px_rgba(0,0,0,0.6)] z-20 relative transform md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-forsythia)] rounded-full font-mono text-[var(--color-oceanic-noir)] text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,200,1,0.4)]">
              Recommended
            </div>
            <h3 className="font-mono text-xl text-[var(--color-forsythia)] mb-2">{plans[1].name}</h3>
            <div className="font-mono text-6xl font-black text-[var(--color-arctic-powder)] mb-2">{plans[1].price}<span className="text-2xl text-[var(--color-mystic-mint)]/50">/mo</span></div>
            <p className="text-[var(--color-mystic-mint)]/70 text-sm mb-8 font-light">For teams operating at production scale.</p>
            
            <ul className="space-y-4 mb-10">
              {plans[1].features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-[var(--color-arctic-powder)] font-mono text-sm font-medium">
                  <div className="w-4 h-4 bg-[var(--color-forsythia)] min-w-4" style={{ maskImage: "url('/frontend/SVGs/arrow-path.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/arrow-path.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                  {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-xl font-mono text-sm font-bold bg-[var(--color-forsythia)] text-[var(--color-oceanic-noir)] hover:bg-[var(--color-arctic-powder)] transition-colors shadow-[0_10px_30px_rgba(255,200,1,0.2)]">
              Upgrade to Scale
            </button>
          </div>

          {/* Plan 3 */}
          <div className="w-full md:w-1/3 p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-[var(--color-mystic-mint)]/10 md:-translate-x-8 md:rounded-l-none z-0 hover:bg-white/10 transition-colors">
            <h3 className="font-mono text-xl text-[var(--color-arctic-powder)] mb-2">{plans[2].name}</h3>
            <div className="font-mono text-5xl font-black text-[var(--color-arctic-powder)] mb-8">{plans[2].price}</div>
            <ul className="space-y-4 mb-8">
              {plans[2].features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-[var(--color-mystic-mint)]/80 font-mono text-sm">
                  <div className="w-3 h-3 bg-[var(--color-mystic-mint)]/50 min-w-3" style={{ maskImage: "url('/frontend/SVGs/chevron-right.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/frontend/SVGs/chevron-right.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                  {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl font-mono text-sm font-bold bg-white/5 text-[var(--color-arctic-powder)] hover:bg-white/10 transition-colors border border-[var(--color-mystic-mint)]/20">
              Contact Sales
            </button>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </section>
  );
}
