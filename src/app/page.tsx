import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DashboardMockup from "@/components/DashboardMockup";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <DashboardMockup />
      <Pricing />
    </main>
  );
}
