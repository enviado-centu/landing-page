export default function ValueProposition() {
  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              Defensa sin tecnicismos
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
              Defensa activa donde más la necesitás
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Diseñada para que comprar, vender y navegar sea tan seguro como
              caminar por tu barrio conocido.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
            <span className="material-symbols-outlined">shield_moon</span>
            <span>Protección pasiva sin consumo de batería</span>
          </div>
        </div>

        {/* 3 Rich Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-surface-container-low flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  link_off
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm w-fit font-bold">
                Inspección de URL profunda
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Tiendas y Enlaces Clonados
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Detecta si la página de cobro o la tienda imita a Mercado Pago,
                bancos comerciales o comercios oficiales usando caracteres
                visualmente idénticos o dominios con letras cambiadas.
              </p>
            </div>
            {/* Visual diagram snippet */}
            <div className="p-3.5 rounded-xl bg-surface-container-lowest flex items-center justify-between text-xs font-mono">
              <span className="text-error line-through">
                mercadopag0.com.ar
              </span>
              <span className="text-error font-bold uppercase tracking-wide">
                Falso
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-surface-container-low flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-tertiary-container/20 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  psychology_alt
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm w-fit font-bold">
                Detección de patrones oscuros
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Alertas de Manipulación
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Te advierte cuando una web utiliza cuentas regresivas engañosas,
                ofertas sospechosamente económicas o amenazas de cierre de
                cuenta para obligarte a pagar apurado.
              </p>
            </div>
            {/* Visual diagram snippet */}
            <div className="p-3.5 rounded-xl bg-surface-container-lowest flex items-center justify-between text-xs">
              <span className="text-on-surface-variant">
                Cuenta regresiva artificial:
              </span>
              <span className="text-error font-bold font-mono">
                Detectada (bloqueada)
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-surface-container-low flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  bolt
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm w-fit font-bold">
                Ligero • Menos de 4MB
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Cero Configuración Compleja
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                No necesitás saber de informática ni modificar parámetros
                complejos. Se instala en dos clics, se actualiza sola y te
                protege en silencio sin ralentizar tu navegación diaria.
              </p>
            </div>
            {/* Visual diagram snippet */}
            <div className="p-3.5 rounded-xl bg-surface-container-lowest flex items-center justify-between text-xs font-semibold">
              <span className="text-on-surface-variant">
                Consumo de CPU promedio:
              </span>
              <span className="text-primary">&lt; 0.1%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
