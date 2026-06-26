"use client";

import Background from "@/components/background/Background";
import CursorGlow from "@/components/common/CursorGlow";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function GetStarted() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // Using Web3Forms for serverless email forwarding on static sites (GitHub Pages)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f5c0c2e7-edac-4c2e-973b-d81e0a680596", // Integrated Web3Forms Key
          email: email,
          subject: "New Access Request for AetherFlow",
          from_name: "AetherFlow Landing Page",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      <Background />
      <CursorGlow />
      <Navbar />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-20">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forsythia via-saffron to-nocturnal shadow-[0_0_40px_rgba(255,200,1,0.3)] flex items-center justify-center mb-8 animate-pulse-slow">
            <span className="font-black text-oceanic text-2xl">A</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Start Building <span className="text-[#3CB3A5]">Now</span>
        </h1>
        <p className="text-arctic/60 max-w-lg mx-auto text-lg mb-10">
          The ultimate AI workflow orchestration platform is coming soon. Enter your email to get early access.
        </p>

        {status === "success" ? (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500 mb-16">
            <CheckCircle2 size={64} className="text-[#3CB3A5] mb-6" />
            <h2 className="text-2xl font-bold text-arctic mb-2">You're on the list!</h2>
            <p className="text-arctic/60 text-center max-w-sm">
              We've received your request. Keep an eye on <span className="text-forsythia">{email}</span> for your early access invitation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto mb-16 relative">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              placeholder="Enter your work email" 
              className="flex-1 bg-arctic/5 border border-arctic/10 rounded-full px-6 py-4 text-arctic outline-none focus:border-forsythia transition-colors disabled:opacity-50"
            />
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="bg-forsythia text-oceanic font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,200,1,0.2)] disabled:opacity-50 disabled:hover:scale-100 min-w-[160px] flex justify-center items-center"
            >
              {status === "loading" ? (
                <div className="w-5 h-5 border-2 border-oceanic/20 border-t-black rounded-full animate-spin" />
              ) : (
                "Request Access"
              )}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm absolute -bottom-8 left-0 text-center w-full">
                Invalid Access Key. Please configure Web3Forms.
              </p>
            )}
          </form>
        )}

        <Link href="/" className="text-arctic/50 hover:text-arctic transition-colors flex items-center gap-2 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
