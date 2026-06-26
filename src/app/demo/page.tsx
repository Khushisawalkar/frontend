import Background from "@/components/background/Background";
import CursorGlow from "@/components/common/CursorGlow";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { ArrowLeft, PlayCircle } from "lucide-react";

export default function Demo() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      <Background />
      <CursorGlow />
      <Navbar />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-20">
        <PlayCircle size={64} className="text-[#3CB3A5] mb-8 animate-pulse" />
        
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
          Interactive <span className="text-[#FFC801]">Live Demo</span>
        </h1>
        <p className="text-[#F1F6F4]/60 max-w-lg mx-auto text-lg mb-12">
          Experience the power of our real-time telemetry streaming protocol in action. The live sandbox environment is booting up.
        </p>

        <div className="w-full max-w-3xl aspect-video bg-[#172B36]/50 border border-[#F1F6F4]/10 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm mb-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#3CB3A5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <span className="font-mono text-[#3CB3A5] text-sm animate-pulse tracking-widest uppercase">
             [ Loading Telemetry Dashboard... ]
          </span>
        </div>

        <Link href="/" className="text-[#F1F6F4]/50 hover:text-[#F1F6F4] transition-colors flex items-center gap-2 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
