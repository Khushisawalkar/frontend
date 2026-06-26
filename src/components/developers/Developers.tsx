"use client";

import { ArrowRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Developers() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `import { Aether } from '@aetherflow/core';

// Initialize the quiet edge client
const client = new Aether({
  key: process.env.AETHER_KEY,
  region: 'global-edge'
});

// Stream telemetry softly
await client.stream.push('cognitive_load', {
  user: 'usr_948a7b',
  metrics: {
    calmness: 0.94,
    fatigue: 0.12
  }
});`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="relative py-32 overflow-hidden z-10">
      
      <div className="section max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-24">
        
        {/* Text Content */}
        <div className="flex-1 max-w-xl">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-arctic/20" />
            <span className="text-[13px] font-medium tracking-widest uppercase text-arctic/60">Developer Experience</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium mb-6 tracking-tight text-arctic/95 leading-tight">
            Beautifully <br />
            <span className="text-arctic/60 italic font-serif">simple integration.</span>
          </h2>
          <p className="text-[17px] text-arctic/50 leading-relaxed font-light mb-10">
            Our SDK is designed with intense restraint. No bloated dependencies, no complex configuration. Just pure, elegant connection to the edge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/get-started" className="flex items-center justify-center gap-3 bg-arctic text-oceanic px-8 py-4 rounded-full text-[15px] font-medium transition-transform duration-500 hover:scale-[1.02] shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
              Read the documentation <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Soft Glass Terminal */}
        <div className="flex-1 w-full relative">
          {/* Gentle ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-nocturnal/10 blur-[100px] rounded-full animate-breathe-slow -z-10" />
          
          <div className="relative rounded-[2.5rem] bg-arctic/[0.02] border border-arctic/5 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-arctic/5">
              <div className="flex gap-2.5">
                <div className="w-3 h-3 rounded-full bg-arctic/10" />
                <div className="w-3 h-3 rounded-full bg-arctic/10" />
                <div className="w-3 h-3 rounded-full bg-arctic/10" />
              </div>
              <div className="text-arctic/30 text-[11px] font-medium tracking-widest uppercase">stream.ts</div>
              <button onClick={copyToClipboard} className="text-arctic/30 hover:text-arctic transition-colors duration-300">
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            
            {/* Code Content - JetBrains Mono used elegantly */}
            <div className="p-8 md:p-12 overflow-x-auto">
              <pre className="font-mono text-[14px] leading-[2.2] tracking-wide">
                <code className="text-arctic/80">
                  <span className="text-mystic/60 italic">import</span> {'{ Aether }'} <span className="text-mystic/60 italic">from</span> <span className="text-arctic/40">'@aetherflow/core'</span>;<br/><br/>
                  <span className="text-arctic/20 italic font-light">{'// Initialize the quiet edge client'}</span><br/>
                  <span className="text-mystic/60 italic">const</span> client = <span className="text-mystic/60 italic">new</span> Aether({`{`}<br/>
                  {'  '}key: process.env.AETHER_KEY,<br/>
                  {'  '}region: <span className="text-arctic/40">'global-edge'</span><br/>
                  {`}`});<br/><br/>
                  <span className="text-arctic/20 italic font-light">{'// Stream telemetry softly'}</span><br/>
                  <span className="text-mystic/60 italic">await</span> client.stream.push(<span className="text-arctic/40">'cognitive_load'</span>, {`{`}<br/>
                  {'  '}user: <span className="text-arctic/40">'usr_948a7b'</span>,<br/>
                  {'  '}metrics: {`{`}<br/>
                  {'    '}calmness: <span className="text-arctic/80">0.94</span>,<br/>
                  {'    '}fatigue: <span className="text-arctic/80">0.12</span><br/>
                  {'  }'}<br/>
                  {`}`});
                </code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
