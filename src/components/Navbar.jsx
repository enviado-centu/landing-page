import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isScanner = location.pathname === "/scanner";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-[#e2e8f0] shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-16 max-w-7xl mx-auto px-gutter flex items-center justify-between">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center gap-space-sm cursor-pointer">
          <img
            alt="AuraGuard Shield Logo"
            className="h-8 w-auto object-contain"
            src="/logo.png"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://lh3.googleusercontent.com/aida/AEtjO1U3zXlF4xFb28rpXQSUhbmYAxv6xLsJRFkjBPcKkSutCXDi2ZSVyAhThtFuRXXzcmx6vvCqR0lnUId8jYVMKrvJKrqaQvHCe93WCGLNwuv-Arzu2XLYXOyBbG-8xXM_PA0S9ebkSR7MfqfhGRdn4mkv5LDy_moW3wFUutxKgP6k96ZY9ozfqDr7smi853G7K0YMKZeQiiIuPo6NWDpUJ7FXMWgLmMYC0tSOHQoeaGKvLdVp-Aue65PS5RA";
            }}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-[18px] text-[#0b132b] font-bold tracking-tight">
              AuraGuard
            </span>
            <span className="font-label-sm text-[10px] text-[#006c49] font-bold tracking-wider uppercase -mt-0.5">
              Escudo Ciudadano
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-space-md">
          <Link
            className={`font-label-lg text-label-lg px-space-sm py-space-xs font-medium rounded-lg transition-colors ${
              !isScanner
                ? "bg-[#f0fdf4] text-[#006c49] font-bold"
                : "text-[#565d79] hover:text-[#0b132b]"
            }`}
            to="/"
          >
            Inicio
          </Link>
          <Link
            className={`font-label-lg text-label-lg px-space-sm py-space-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
              isScanner
                ? "bg-[#f0fdf4] text-[#006c49] font-bold"
                : "text-[#565d79] hover:text-[#0b132b]"
            }`}
            to="/scanner"
          >
            <span className="material-symbols-outlined text-[17px] text-[#10b981]">
              radar
            </span>
            <span>Escáner de Amenazas</span>
          </Link>
          <a
            className="font-label-lg text-label-lg text-[#565d79] hover:text-[#0b132b] transition-colors px-space-sm py-space-xs font-medium"
            href="/#como-funciona"
          >
            ¿Cómo funciona?
          </a>
          <a
            className="font-label-lg text-label-lg text-[#565d79] hover:text-[#0b132b] transition-colors px-space-sm py-space-xs font-medium"
            href="/#para-comercios"
          >
            Para Comercios
          </a>
          <a
            className="font-label-lg text-label-lg text-[#565d79] hover:text-[#0b132b] transition-colors px-space-sm py-space-xs font-medium"
            href="/#preguntas-frecuentes"
          >
            Preguntas Frecuentes
          </a>
        </nav>

        {/* Action Button & Tactical badge */}
        <div className="flex items-center gap-space-sm">
          <div className="hidden sm:flex items-center gap-space-xs bg-[#f0fdf4] border border-[#bbf7d0] px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="font-label-sm text-[11px] text-[#006c49] font-bold">
              Modo Cívico Activo
            </span>
          </div>

          <Link
            className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:bg-primary transition-all duration-200"
            to="/scanner"
          >
            <span className="material-symbols-outlined text-[18px]">
              travel_explore
            </span>
            <span className="hidden sm:inline">Probar Escáner</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
