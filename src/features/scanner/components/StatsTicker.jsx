export default function StatsTicker() {
  return (
    <div className="w-full max-w-4xl mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
        <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm text-[#0f172a] font-extrabold">
            +14.200
          </span>
          <span className="font-label-sm text-label-sm text-[#64748b] font-medium">
            Sitios fraudulentos clasificados
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
        <span className="material-symbols-outlined text-[#00687a] text-[22px]">
          no_accounts
        </span>
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm text-[#0f172a] font-extrabold">
            0 Registros
          </span>
          <span className="font-label-sm text-label-sm text-[#64748b] font-medium">
            Acceso directo sin formularios
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
        <span className="material-symbols-outlined text-[#d97706] text-[22px]">
          speed
        </span>
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm text-[#0f172a] font-extrabold">
            1.8 segundos
          </span>
          <span className="font-label-sm text-label-sm text-[#64748b] font-medium">
            Tiempo medio de diagnóstico
          </span>
        </div>
      </div>
    </div>
  );
}
