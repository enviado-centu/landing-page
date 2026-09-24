import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import ScannerSection from "../features/scanner/ScannerSection";

export default function ScannerPage() {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#faf8ff] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#10b981] mx-auto"></div>
          <p className="mt-4 text-[#64748b]">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

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
