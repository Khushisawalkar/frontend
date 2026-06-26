import Background from "@/components/background/Background";
import CursorGlow from "@/components/common/CursorGlow";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Solutions from "@/components/solutions/Solutions";
import Developers from "@/components/developers/Developers";
import Pricing from "@/components/pricing/Pricing";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Solutions />
      <Features />
      <Developers />
      <Pricing />
      <Footer />
    </main>
  );
}
