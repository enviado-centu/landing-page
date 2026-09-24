export default function UrlScanner({ url, setUrl, onScan, isScanning }) {
  const examples = [
    {
      label: "mercadolibre.tienda-falsa.top",
      value: "https://mercadolibre.tienda-falsa.top/oferta-exclusiva",
    },
    {
      label: "banco-urgente-clave.com",
      value: "https://banco-urgente-clave.com/seguridad/login",
    },
    {
      label: "sorteo-whatsapp.net",
      value: "https://sorteo-whatsapp.net/reclamar-premio",
    },
  ];

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && url.trim()) {
      onScan(url);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Search Input Box */}
      <div className="relative flex flex-col md:flex-row items-stretch gap-2 bg-[#f8fafc] rounded-xl p-2 border border-[#cbd5e1] focus-within:border-[#10b981] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#10b981]/15 transition-all">
        <div className="flex items-center flex-1 px-3 gap-3">
          <span className="material-symbols-outlined text-[#10b981] text-[24px]">
            language
          </span>
          <input
            className="w-full bg-transparent text-[#0f172a] placeholder:text-[#94a3b8] font-body-md text-body-md focus:outline-none"
            placeholder="Pegá una dirección web, tienda online o link de cobro (ej. https://mercadopago.cobro-urgente.online)..."
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#10b981] hover:bg-[#006c49] text-white font-label-lg text-label-lg font-bold transition-all duration-200 shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.45)] active:scale-[0.99] whitespace-nowrap disabled:opacity-50 cursor-pointer"
          disabled={isScanning || !url.trim()}
          onClick={() => onScan(url)}
        >
          <span className="material-symbols-outlined text-[20px]">radar</span>
          <span>Analizar Enlace</span>
        </button>
      </div>

      {/* Quick Sandbox Targets */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="font-label-sm text-label-sm text-[#64748b] flex items-center gap-1 font-medium">
          <span className="material-symbols-outlined text-[15px] text-[#10b981]">
            bolt
          </span>{" "}
          Pruebas rápidas:
        </span>
        {examples.map((ex, i) => (
          <button
            key={i}
            className="font-label-sm text-label-sm px-2.5 py-1 rounded-md bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#334155] hover:text-[#006c49] transition-colors border border-[#e2e8f0] font-mono cursor-pointer"
            onClick={() => {
              setUrl(ex.value);
              onScan(ex.value);
            }}
          >
            {ex.label}
          </button>
        ))}
      </div>
    </div>
  );
}
