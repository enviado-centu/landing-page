export default function CtaBanner() {
  return (
    <section className="w-full py-20 px-gutter" id="instalar">
      <div className="max-w-6xl mx-auto rounded-3xl bg-inverse-surface p-10 md:p-16 text-center flex flex-col items-center gap-8 shadow-2xl relative overflow-hidden">
        {/* Glow effect backdrop */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 max-w-2xl">
          <div className="w-16 h-16 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center shadow-lg mb-2">
            <span className="material-symbols-outlined text-[36px]">
              shield_lock
            </span>
          </div>
          <h2 className="font-display-hero text-headline-xl md:text-display-hero text-white tracking-tight leading-tight font-extrabold">
            Protegé tus compras y tu plata hoy mismo.
          </h2>
          <p className="font-body-xl text-body-xl text-slate-300 leading-relaxed">
            Sumate a miles de ciudadanos que ya navegan tranquilos, blindados
            contra el fraude online y respaldados por una red solidaria.
          </p>
        </div>

        {/* Main Action */}
        <div className="relative z-10 flex flex-col items-center gap-4 w-full">
          <a
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold shadow-[0_6px_30px_rgba(16,185,129,0.5)] hover:bg-primary transition-all duration-200 transform hover:scale-[1.02]"
            href="#"
          >
            <span className="material-symbols-outlined text-[28px]">
              extension
            </span>
            <span>Instalar AuraGuard en el Navegador — Es Gratis</span>
          </a>

          {/* Trust checkmarks badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-4 text-slate-300 font-label-md text-label-md">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary-container text-[18px]">
                check_circle
              </span>
              <span>Sin registros obligatorios</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary-container text-[18px]">
                check_circle
              </span>
              <span>100% Código Abierto y Seguro</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary-container text-[18px]">
                check_circle
              </span>
              <span>Instalación inmediata en 2 clics</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
