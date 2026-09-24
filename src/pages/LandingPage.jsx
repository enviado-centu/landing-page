import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../features/landing/components/Hero";
import ValueProposition from "../features/landing/components/ValueProposition";
import DefenseLayers from "../features/landing/components/DefenseLayers";
import AudienceSections from "../features/landing/components/AudienceSections";
import Testimonials from "../features/landing/components/Testimonials";
import FAQ from "../features/landing/components/FAQ";
import CtaBanner from "../features/landing/components/CtaBanner";

export default function LandingPage() {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased selection:bg-primary-container/20 selection:text-primary min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="w-full pt-20 relative overflow-hidden flex-1">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.12),rgba(250,248,255,0))] pointer-events-none -z-10" />
        <div className="flex flex-col w-full">
          <Hero />
          <ValueProposition />
          <DefenseLayers />
          <AudienceSections />
          <Testimonials />
          <FAQ />
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
