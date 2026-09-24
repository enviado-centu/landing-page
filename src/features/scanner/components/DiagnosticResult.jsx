const CIRCUNFERENCIA = 2 * Math.PI * 50;

// Textos y colores por nivel. Hablan de señales: nunca afirman que el sitio "es" una estafa.
const NIVELES = {
  high: {
    color: "#dc2626",
    pista: "text-red-100",
    etiqueta: "Riesgo alto",
    etiquetaColor: "text-[#991b1b]",
    badge: "bg-red-50 border-red-100 text-[#dc2626]",
    icono: "dangerous",
    titulo: "Encontramos señales de peligro",
    enlaceIcono: "link_off",
  },
  medium: {
    color: "#d97706",
    pista: "text-amber-100",
    etiqueta: "Riesgo medio",
    etiquetaColor: "text-amber-800",
    badge: "bg-amber-50 border-amber-100 text-amber-700",
    icono: "warning",
    titulo: "Encontramos señales de alerta",
    enlaceIcono: "link_off",
  },
  low: {
    color: "#10b981",
    pista: "text-emerald-100",
    etiqueta: "Riesgo bajo",
    etiquetaColor: "text-emerald-800",
    badge: "bg-emerald-50 border-emerald-100 text-emerald-700",
    icono: "verified_user",
    titulo: "No encontramos señales de riesgo",
    enlaceIcono: "link",
  },
};

const RECOMENDACIONES = [
  {
    icono: "✕",
    titulo: "No pongas tus claves",
    texto:
      "Jamás escribas tu contraseña, PIN ni códigos que te lleguen por mensaje de texto o WhatsApp.",
    estilo: "bg-rose-50/70 border-rose-100 hover:border-rose-200",
    circulo: "border-rose-200 text-[#dc2626] font-bold text-[14px]",
    tituloColor: "text-rose-950",
  },
  {
    icono: "tab_close",
    titulo: "Cerrá esa pestaña",
    texto:
      "No continúes navegando en ese enlace ni hagas clic en ninguno de sus botones o imágenes.",
    estilo: "bg-amber-50/70 border-amber-100 hover:border-amber-200",
    circulo: "border-amber-200 text-amber-600",
    tituloColor: "text-amber-950",
  },
  {
    icono: "smartphone",
    titulo: "Abrí tu app oficial",
    texto:
      "Si querés verificar tu cuenta o saldo, ingresá directo desde la app instalada en tu teléfono celular.",
    estilo: "bg-emerald-50/70 border-emerald-100 hover:border-emerald-200",
    circulo: "border-emerald-200 text-emerald-600",
    tituloColor: "text-emerald-950",
  },
];

export default function DiagnosticResult({ scan, onReset, onOpenAssistant }) {
  const { summary, target } = scan;
  const nivel = NIVELES[summary.level] ?? NIVELES.low;
  const puntaje = summary.score_100;
  const titulo = summary.official_brand ? `Es el sitio oficial de ${summary.official_brand}` : nivel.titulo;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 animate-fade-in">
      {/* MAIN DIAGNOSTIC CARD */}
      <section className="w-full bg-white rounded-2xl border border-slate-200 shadow-[0_4px_25px_rgba(0,0,0,0.04)] p-6 md:p-10 text-center space-y-7">
        {/* Analyzed URL Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-[#f8fafc] border border-slate-200 px-4 py-1.5 rounded-full text-xs max-w-full">
          <span className="material-symbols-outlined text-[16px]" style={{ color: nivel.color }}>
            {nivel.enlaceIcono}
          </span>
          <span className="font-bold text-[#64748b] uppercase tracking-wider text-[11px]">
            ENLACE ANALIZADO:
          </span>
          <span className="font-mono font-bold text-[#0f172a] text-[13px] select-all break-all">
            {target.url}
          </span>
        </div>

        {/* Circular Severity Gauge & Verdict */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
              <circle className={nivel.pista} cx="60" cy="60" fill="none" r="50" stroke="currentColor" strokeWidth="10" />
              <circle
                cx="60"
                cy="60"
                fill="none"
                r="50"
                stroke={nivel.color}
                strokeDasharray={CIRCUNFERENCIA}
                strokeDashoffset={CIRCUNFERENCIA * (1 - puntaje / 100)}
                strokeLinecap="round"
                strokeWidth="10"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-[44px] font-black leading-none tracking-tight" style={{ color: nivel.color }}>
                {puntaje}%
              </span>
              <span className={`text-[11px] font-extrabold uppercase tracking-wider mt-1 ${nivel.etiquetaColor}`}>
                {nivel.etiqueta}
              </span>
            </div>
          </div>

          {/* Headline & Description */}
          <div className="space-y-2 max-w-xl mx-auto">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[12px] font-bold ${nivel.badge}`}>
              <span className="material-symbols-outlined text-[16px]">{nivel.icono}</span>
              <span>{nivel.etiqueta}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              {titulo}
            </h1>
            {summary.brand && (
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Podría estar haciéndose pasar por{" "}
                <strong className="text-[#0f172a] font-bold">{summary.brand}</strong>.
              </p>
            )}
          </div>
        </div>

        {/* Motivos */}
        <div className="text-left max-w-2xl mx-auto w-full">
          <h2 className="text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            Qué encontramos
          </h2>
          {summary.reasons.length > 0 ? (
            <ul className="space-y-2">
              {summary.reasons.map((motivo) => (
                <li key={motivo} className="flex items-start gap-2 text-[14px] text-slate-700">
                  <span className="material-symbols-outlined text-[18px] shrink-0" style={{ color: nivel.color }}>
                    {summary.level === "low" ? "check_circle" : "report"}
                  </span>
                  <span>{motivo}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[14px] text-slate-600">
              No encontramos señales de riesgo en la dirección.
            </p>
          )}
        </div>

        {/* Tip */}
        <div className="max-w-2xl mx-auto w-full flex items-start gap-2 text-left p-4 rounded-xl bg-[#f8fafc] border border-slate-200">
          <span className="material-symbols-outlined text-[20px] text-[#00687a] shrink-0">lightbulb</span>
          <p className="text-[14px] text-slate-700">{summary.tip}</p>
        </div>

        {/* Recomendaciones: solo si hay señales de riesgo */}
        {summary.level !== "low" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left pt-1">
            {RECOMENDACIONES.map((r) => (
              <div key={r.titulo} className={`p-4 rounded-xl border space-y-2 flex flex-col items-start transition ${r.estilo}`}>
                <div className={`w-8 h-8 rounded-full bg-white border flex items-center justify-center shadow-2xs ${r.circulo}`}>
                  {r.icono === "✕" ? r.icono : <span className="material-symbols-outlined text-[18px]">{r.icono}</span>}
                </div>
                <h2 className={`text-[15px] font-bold ${r.tituloColor}`}>{r.titulo}</h2>
                <p className="text-[13px] text-slate-600 leading-snug">{r.texto}</p>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#10b981] hover:bg-[#006c49] text-white font-bold text-[14px] shadow-[0_4px_16px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
            onClick={onReset}
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span>Analizar otra dirección</span>
          </button>

          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#00687a] border border-slate-300 font-semibold text-[13px] transition shadow-2xs hover:border-slate-400 cursor-pointer"
            onClick={onOpenAssistant}
          >
            <span className="material-symbols-outlined text-[18px] text-[#00687a]">forum</span>
            <span>Consultar al Asistente</span>
          </button>
        </div>
      </section>

      <p className="text-xs text-slate-500 text-center max-w-xl">
        El análisis mira la dirección web (no el contenido de la página). Es una ayuda: ante la
        duda, entrá siempre desde la app oficial.
      </p>
    </div>
  );
}
