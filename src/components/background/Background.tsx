"use client";

export default function Background() {
  return (
    <>
      {/* Deep Oceanic Noir Base */}
      <div className="fixed inset-0 -z-30 bg-oceanic" />
      
      {/* Vibrant Pluffymaid Mesh Gradient (Matching the exact palette image) */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        
        {/* Top Left: Nocturnal Expedition */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-nocturnal opacity-60 blur-[150px] animate-breathe-slow" />
        
        {/* Bottom Right: Deep Saffron (Warmth) */}
        <div className="absolute bottom-[-30%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-saffron opacity-40 blur-[180px] animate-breathe-slower" style={{ animationDelay: '2s' }} />
        
        {/* Center Right: Forsythia (Bright Glow) */}
        <div className="absolute top-[30%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-forsythia opacity-30 blur-[150px] mix-blend-screen animate-float" />
        
        {/* Top Center: Mystic Mint (Soft Highlight) */}
        <div className="absolute top-[-10%] left-[40%] w-[50vw] h-[30vw] rounded-full bg-mystic opacity-20 blur-[120px] mix-blend-screen animate-breathe-slow" style={{ animationDelay: '4s' }} />

      </div>

      {/* Extreme subtle texture for organic feel */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
      />
    </>
  );
}
