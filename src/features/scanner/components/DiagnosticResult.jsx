export default function DiagnosticResult({
  targetUrl,
  onReset,
  onOpenAssistant,
}) {
  const displayUrl = targetUrl || "mercadopago.seguridad-alerta-cuenta.com";

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 animate-fade-in">
      {/* MAIN DIAGNOSTIC CARD */}
      <section className="w-full bg-white rounded-2xl border border-slate-200 shadow-[0_4px_25px_rgba(0,0,0,0.04)] p-6 md:p-10 text-center space-y-7">
        {/* Analyzed URL Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-[#f8fafc] border border-slate-200 px-4 py-1.5 rounded-full text-xs">
          <span className="material-symbols-outlined text-[#dc2626] text-[16px]">
            link_off
          </span>
          <span className="font-bold text-[#64748b] uppercase tracking-wider text-[11px]">
            ENLACE ANALIZADO:
          </span>
          <span className="font-mono font-bold text-[#0f172a] text-[13px] select-all">
            {displayUrl}
          </span>
        </div>

        {/* Circular Severity Gauge & Verdict */}
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* SVG Gauge */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle
                className="text-red-100"
                cx="60"
                cy="60"
                fill="none"
                r="50"
                stroke="currentColor"
                strokeWidth="10"
              />
              <circle
                className="text-[#dc2626]"
                cx="60"
                cy="60"
                fill="none"
                r="50"
                stroke="currentColor"
                strokeDasharray="314.159"
                strokeDashoffset="18.84"
                strokeLinecap="round"
                strokeWidth="10"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-[44px] font-black leading-none text-[#dc2626] tracking-tight">
                94%
              </span>
              <span className="text-[11px] font-extrabold text-[#991b1b] uppercase tracking-wider mt-1">
                Riesgo Extremo
              </span>
            </div>
          </div>

          {/* Headline & Description */}
          <div className="space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#dc2626] text-[12px] font-bold">
              <span className="material-symbols-outlined text-[16px]">
                dangerous
              </span>
              <span>Severidad Crítica</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              ¡Peligro! Es una página falsa
            </h1>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              No ingreses tus datos ni tu contraseña. Quieren robar tu cuenta
              bancaria haciéndose pasar por{" "}
              <strong className="text-[#0f172a] font-bold">Mercado Pago</strong>
              .
            </p>
          </div>
        </div>

        {/* 3 Key Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left pt-1">
          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-100 space-y-2 flex flex-col items-start transition hover:border-rose-200">
            <div className="w-8 h-8 rounded-full bg-white border border-rose-200 flex items-center justify-center text-[#dc2626] font-bold text-[14px] shadow-2xs">
              ✕
            </div>
            <h2 className="text-[15px] font-bold text-rose-950">
              No pongas tus claves
            </h2>
            <p className="text-[13px] text-slate-600 leading-snug">
              Jamás escribas tu contraseña, PIN ni códigos que te lleguen por
              mensaje de texto o WhatsApp.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100 space-y-2 flex flex-col items-start transition hover:border-amber-200">
            <div className="w-8 h-8 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-600 shadow-2xs">
              <span className="material-symbols-outlined text-[18px]">
                tab_close
              </span>
            </div>
            <h2 className="text-[15px] font-bold text-amber-950">
              Cerrá esa pestaña
            </h2>
            <p className="text-[13px] text-slate-600 leading-snug">
              No continúes navegando en ese enlace ni hagas clic en ninguno de
              sus botones o imágenes.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-2 flex flex-col items-start transition hover:border-emerald-200">
            <div className="w-8 h-8 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-2xs">
              <span className="material-symbols-outlined text-[18px]">
                smartphone
              </span>
            </div>
            <h2 className="text-[15px] font-bold text-emerald-950">
              Abrí tu app oficial
            </h2>
            <p className="text-[13px] text-slate-600 leading-snug">
              Si querés verificar tu cuenta o saldo, ingresá directo desde la
              app instalada en tu teléfono celular.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#10b981] hover:bg-[#006c49] text-white font-bold text-[14px] shadow-[0_4px_16px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
            onClick={onReset}
          >
            <span className="material-symbols-outlined text-[20px]">
              arrow_back
            </span>
            <span>Cerrar y volver al explorador seguro</span>
          </button>

          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#00687a] border border-slate-300 font-semibold text-[13px] transition shadow-2xs hover:border-slate-400 cursor-pointer"
            onClick={onOpenAssistant}
          >
            <span className="material-symbols-outlined text-[18px] text-[#00687a]">
              forum
            </span>
            <span>Consultar al Asistente</span>
          </button>
        </div>
      </section>

      {/* BOTTOM CAPSULE & SUBTEXT */}
      <div className="w-full flex flex-col items-center text-center space-y-3 pt-1">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f0fdf4] border border-emerald-200 text-emerald-900 text-xs font-medium shadow-2xs">
          <span className="text-sm">🛡️</span>
          <span>
            Análisis 100% anónimo y gratuito. Protegiendo la economía ciudadana.
          </span>
        </div>
        <p className="text-xs text-slate-500">
          ¿Tenés dudas sobre otro mensaje o cobro?
          <button
            className="text-[#006c49] hover:text-[#10b981] font-semibold underline ml-1 transition cursor-pointer"
            onClick={onReset}
          >
            Hacer una nueva consulta gratuita
          </button>
        </p>
      </div>
    </div>
  );
}
