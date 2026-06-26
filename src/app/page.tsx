import Background from "@/components/background/Background";
import CursorGlow from "@/components/common/CursorGlow";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
      <CursorGlow />
      <Navbar />
      <Hero />
    </main>
  );
}
