"use client";

export default function Background() {
  return (
    <>
      {/* Deep, calming base color */}
      <div className="fixed inset-0 -z-30 bg-[#172B36]" />
      
      {/* Soft Breathing Orbs (Pluffymaid Style) */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        
        {/* Top Left Deep Orb */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#114C5A] blur-[150px] mix-blend-screen animate-breathe-slow" />
        
        {/* Bottom Right Warm Orb */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#114C5A] blur-[120px] mix-blend-screen animate-breathe-slower" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Accent Orb */}
        <div className="absolute top-[30%] left-[50%] w-[40vw] h-[40vw] rounded-full bg-[#D9E8E2] opacity-10 blur-[120px] mix-blend-screen animate-float" />
        
        {/* Warm Forsythia Glow */}
        <div className="absolute top-0 right-0 w-[30vw] h-[30vw] rounded-full bg-[#FFC801] opacity-[0.03] blur-[100px] animate-breathe-slow" style={{ animationDelay: '4s' }} />

      </div>

      {/* Extreme subtle texture - replaces the harsh grid */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
      />
    </>
  );
}
