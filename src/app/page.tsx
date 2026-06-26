import Background from "@/components/background/Background";
import CursorGlow from "@/components/common/CursorGlow";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
