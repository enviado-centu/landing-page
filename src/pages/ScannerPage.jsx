import { Link } from "react-router-dom";
import ScannerSection from "../features/scanner/ScannerSection";

export default function ScannerPage() {
  return (
    <div className="w-full min-h-screen bg-[#faf8ff] text-[#111a36] relative overflow-hidden flex flex-col justify-between selection:bg-primary-container/20 selection:text-primary">
      {/* Minimal Top Bar with back link (no global Navbar/Footer) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 flex items-center justify-between z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-semibold text-[#565d79] hover:text-[#0b132b] hover:bg-white/80 border border-transparent hover:border-[#e2e8f0] transition-colors cursor-pointer shadow-xs"
        >
          <span className="material-symbols-outlined text-[18px]">
            arrow_back
          </span>
          <span>Volver al Inicio</span>
        </Link>
        <span className="text-xs font-mono text-[#64748b]">
          AuraGuard Scanner Cívico
        </span>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center">
        <ScannerSection />
      </main>
    </div>
  );
}
