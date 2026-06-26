import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[var(--color-oceanic-noir)] flex items-center overflow-hidden">
      {/* Premium Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-[40%] -left-[20%] w-[150%] h-[150%] bg-gradient-radial from-[var(--color-nocturnal-expedition)] to-transparent opacity-60 blur-[150px] animate-[pulse_10s_ease-in-out_infinite_alternate]"
        />
        <div 
          className="absolute -bottom-[30%] -right-[10%] w-[100%] h-[100%] bg-gradient-radial from-[var(--color-deep-saffron)] to-transparent opacity-10 blur-[150px] animate-[pulse_15s_ease-in-out_infinite_alternate]"
        />
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Typography Block (Bleeding off grid style) */}
        <div className="w-full lg:w-[60%] flex flex-col items-start pt-20 lg:pt-0">
          <div className="flex items-center gap-4 mb-8 animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)] opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }}>
            <span className="font-mono px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full text-[var(--color-arctic-powder)] bg-[var(--color-nocturnal-expedition)]/80 border border-[var(--color-mystic-mint)]/20 backdrop-blur-md shadow-[0_0_20px_rgba(17,76,90,0.5)]">
              AI Infrastructure v2.0
            </span>
            <div className="h-[1px] w-12 bg-[var(--color-mystic-mint)]/30" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-[var(--color-arctic-powder)] mb-8 tracking-tighter leading-[0.9] animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)] opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
            Compute <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-forsythia)] to-[var(--color-deep-saffron)]">Intelligently.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--color-arctic-powder)]/70 mb-12 max-w-xl leading-relaxed font-light animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)] opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.3s' }}>
            The foundational data flow architecture for billion-dollar enterprises. Automate, scale, and conquer with extreme precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)] opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.4s' }}>
            <button className="group relative px-10 py-5 rounded-2xl font-semibold text-black bg-[var(--color-forsythia)] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,200,1,0.3)]">
              <span className="relative z-10 flex items-center gap-3">
                Initialize Cluster
                <span className="inline-block w-5 h-5 bg-black transition-transform duration-500 group-hover:translate-x-1" style={{ maskImage: "url('/SVGs/arrow-trending-up.svg')", maskSize: "cover", WebkitMaskImage: "url('/SVGs/arrow-trending-up.svg')", WebkitMaskSize: "cover" }} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </button>
            
            <button className="group px-10 py-5 rounded-2xl font-medium text-[var(--color-arctic-powder)] bg-transparent border border-[var(--color-mystic-mint)]/20 transition-all duration-500 hover:bg-[var(--color-nocturnal-expedition)]/30 hover:border-[var(--color-mystic-mint)]/50 backdrop-blur-sm">
              Read the Docs
            </button>
          </div>
        </div>

        {/* Right Abstract Data Stream */}
        <div className="w-full lg:w-[40%] h-[600px] relative hidden lg:block perspective-1000">
          <div className="absolute inset-0 animate-[spin_60s_linear_infinite] opacity-30 transform-gpu preserve-3d" style={{ transform: 'rotateX(60deg) rotateY(20deg)' }}>
            {/* Using Official Assets to build procedural geometry */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-nocturnal-expedition)]" style={{ maskImage: "url('/SVGs/cog-8-tooth.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/SVGs/cog-8-tooth.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
          </div>
          
          <div className="absolute inset-0 animate-[spin_40s_linear_infinite_reverse] opacity-50 transform-gpu preserve-3d" style={{ transform: 'rotateX(40deg) rotateY(-10deg) translateZ(100px)' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-forsythia)]" style={{ maskImage: "url('/SVGs/arrow-path.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/SVGs/arrow-path.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
          </div>

          {/* Floating Data Nodes */}
          <div className="absolute top-[20%] left-[20%] w-32 h-32 bg-[var(--color-deep-saffron)] blur-[60px] animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute bottom-[20%] right-[20%] w-40 h-40 bg-[var(--color-mystic-mint)] blur-[80px] animate-[pulse_6s_ease-in-out_infinite_reverse]" />
        </div>
      </div>

      {/* Global CSS for Animations inside Hero to keep it scoped/clean */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}} />
    </section>
  );
}
