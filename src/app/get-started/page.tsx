import Background from "@/components/background/Background";
import CursorGlow from "@/components/common/CursorGlow";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GetStarted() {
  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <Background />
      <CursorGlow />
      <Navbar />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFC801] via-[#FF9932] to-[#114C5A] shadow-[0_0_40px_rgba(255,200,1,0.3)] flex items-center justify-center mb-8 animate-pulse-slow">
            <span className="font-black text-black text-2xl">A</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Start Building <span className="text-[#3CB3A5]">Now</span>
        </h1>
        <p className="text-white/60 max-w-lg mx-auto text-lg mb-10">
          The ultimate AI workflow orchestration platform is coming soon. Enter your email to get early access.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto mb-16">
          <input 
            type="email" 
            placeholder="Enter your work email" 
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white outline-none focus:border-[#FFC801] transition-colors"
          />
          <button type="button" className="bg-[#FFC801] text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,200,1,0.2)]">
            Request Access
          </button>
        </form>

        <Link href="/" className="text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
