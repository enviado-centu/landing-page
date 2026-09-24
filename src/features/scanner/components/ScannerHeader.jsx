export default function ScannerHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
      {/* Icon with glowing backdrop */}
      <div className="relative flex items-center justify-center group">
        <div className="absolute -inset-2 bg-gradient-to-r from-[#10b981] to-[#00b2d0] rounded-3xl opacity-20 blur-md group-hover:opacity-35 transition duration-500" />
        <div className="relative w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-[#e2e8f0]">
          <svg
            className="w-11 h-11 text-[#10b981] drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mt-1">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] font-label-sm text-label-sm text-[#006c49] font-bold tracking-wider uppercase shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
          Escudo Cívico Digital
        </span>
        <span className="font-label-sm text-label-sm text-[#64748b] font-medium px-2.5 py-0.5 rounded-full bg-white border border-[#e2e8f0] shadow-2xs">
          v2.4 Live
        </span>
      </div>

      {/* Main Title */}
      <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero tracking-tight text-[#0b132b] font-extrabold">
        AURA<span className="text-[#10b981]">GUARD</span>
      </h1>

      {/* Subtitle */}
      <p className="font-body-xl text-body-lg md:text-body-xl text-[#475569] max-w-2xl text-balance leading-relaxed">
        Analizá enlaces sospechosos, capturas de transferencias o mensajes
        engañosos en tiempo real y sin registros.
      </p>
    </div>
  );
}
