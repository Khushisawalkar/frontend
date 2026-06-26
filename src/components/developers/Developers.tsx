"use client";

import { ArrowRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Developers() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `import { AetherClient } from '@aetherflow/sdk';

// Initialize the edge client
const client = new AetherClient({
  apiKey: process.env.AETHER_API_KEY,
  region: 'global-edge'
});

// Stream telemetry data in sub-milliseconds
await client.stream.push('cognitive_load', {
  userId: 'usr_948a7b',
  metrics: {
    focus: 0.94,
    fatigue: 0.12,
    syncRate: '99.99%'
  }
});

console.log('✅ Telemetry streamed to edge nodes.');`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="relative py-32 overflow-hidden z-10 border-t border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#114C5A]/20 blur-[200px] -z-10 rounded-full" />
      
      <div className="section max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-semibold mb-6 tracking-wide backdrop-blur-md">
            DEVELOPER EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Integrate in <span className="text-[#3CB3A5]">Minutes.</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Our Typescript SDK is built for modern edge runtimes. No bloated dependencies, just pure performance. Connect your telemetry streams globally with 3 lines of code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/get-started" className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              Read the Docs <ArrowRight size={16} />
            </Link>
            <Link href="https://github.com/Khushisawalkar" target="_blank" className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
              View on GitHub
            </Link>
          </div>
        </div>

        {/* Code Terminal */}
        <div className="flex-1 w-full max-w-2xl relative group">
          {/* Glow effect behind terminal */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC801] to-[#3CB3A5] rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative rounded-3xl bg-[#091014] border border-white/10 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-white/40 text-xs font-mono">stream.ts</div>
              <button onClick={copyToClipboard} className="text-white/40 hover:text-white transition-colors">
                {copied ? <Check size={16} className="text-[#3CB3A5]" /> : <Copy size={16} />}
              </button>
            </div>
            
            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-loose">
                <code className="text-white/80">
                  <span className="text-[#FF9932]">import</span> {'{ AetherClient }'} <span className="text-[#FF9932]">from</span> <span className="text-[#3CB3A5]">'@aetherflow/sdk'</span>;<br/><br/>
                  <span className="text-white/30">{'// Initialize the edge client'}</span><br/>
                  <span className="text-[#FF9932]">const</span> client = <span className="text-[#FF9932]">new</span> <span className="text-[#FFC801]">AetherClient</span>({`{`}<br/>
                  {'  '}apiKey: process.env.<span className="text-white">AETHER_API_KEY</span>,<br/>
                  {'  '}region: <span className="text-[#3CB3A5]">'global-edge'</span><br/>
                  {`}`});<br/><br/>
                  <span className="text-white/30">{'// Stream telemetry data in sub-milliseconds'}</span><br/>
                  <span className="text-[#FF9932]">await</span> client.stream.<span className="text-[#FFC801]">push</span>(<span className="text-[#3CB3A5]">'cognitive_load'</span>, {`{`}<br/>
                  {'  '}userId: <span className="text-[#3CB3A5]">'usr_948a7b'</span>,<br/>
                  {'  '}metrics: {`{`}<br/>
                  {'    '}focus: <span className="text-[#FF9932]">0.94</span>,<br/>
                  {'    '}fatigue: <span className="text-[#FF9932]">0.12</span>,<br/>
                  {'    '}syncRate: <span className="text-[#3CB3A5]">'99.99%'</span><br/>
                  {'  }'}<br/>
                  {`}`});<br/><br/>
                  <span className="text-white/80">console.<span className="text-[#FFC801]">log</span>(<span className="text-[#3CB3A5]">'✅ Telemetry streamed to edge nodes.'</span>);</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
