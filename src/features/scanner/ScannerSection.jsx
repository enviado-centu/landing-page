import ScannerHeader from "./components/ScannerHeader";
import ScannerContainer from "./components/ScannerContainer";
import StatsTicker from "./components/StatsTicker";
import CommunityFeed from "./components/CommunityFeed";

export default function ScannerSection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-[680px] h-[680px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.14),rgba(250,248,255,0))] blur-[60px]" />
        <div className="w-[420px] h-[420px] bg-secondary-container/40 rounded-full blur-[100px] -mt-24" />
      </div>

      <ScannerHeader />
      <ScannerContainer />
      <StatsTicker />
      <CommunityFeed />
    </section>
  );
}
