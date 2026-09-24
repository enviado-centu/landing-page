import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-gutter pt-8 pb-20 lg:pt-14 lg:pb-28 flex flex-col items-center text-center">
      {/* Top Pill Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low shadow-sm mb-6">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
        </span>
        <span className="font-label-md text-label-md text-primary font-bold">
          Protección activa contra estafas digitales en tiempo real
        </span>
      </div>

      {/* H1 Heading */}
      <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface max-w-4xl tracking-tight leading-[1.08] mb-6 font-extrabold">
        Navegá, comprá y cobrá por internet{" "}
        <span className="text-primary underline decoration-primary/30 decoration-wavy underline-offset-8">
          sin miedo a caer en una estafa.
        </span>
      </h1>

      {/* Subheadline */}
      <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl leading-relaxed mb-8">
        La extensión gratuita para tu navegador que detecta tiendas falsas,
        páginas clonadas de bancos y avisos engañosos antes de que ingreses tus
        datos o entregues un producto.
      </p>

      {/* CTAs & Compatibility */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-3">
        <a
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg shadow-[0_4px_24px_rgba(16,185,129,0.4)] hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5"
          href="#instalar"
        >
          <span className="material-symbols-outlined text-[22px]">
            add_moderator
          </span>
          <span>Añadir a Chrome — Es Gratis</span>
        </a>
        <Link
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors cursor-pointer"
          to="/scanner"
        >
          <span className="material-symbols-outlined text-primary text-[20px]">
            travel_explore
          </span>
          <span>Probar Escáner en Vivo</span>
        </Link>
      </div>

      <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm mb-14">
        <span className="material-symbols-outlined text-[16px] text-primary">
          verified
        </span>
        <span>
          Compatible con Chrome, Edge y Brave • Instalación en 2 clics
        </span>
      </div>

      {/* Realistic Browser Mockup & Floating Extension Card */}
      <div className="relative w-full max-w-5xl rounded-2xl bg-inverse-surface shadow-2xl overflow-hidden text-left">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#131b33]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          {/* Simulated Address Bar */}
          <div className="flex-1 max-w-xl mx-4 px-4 py-1.5 rounded-lg bg-[#1e2746] flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2 truncate">
              <span className="material-symbols-outlined text-error text-[16px]">
                lock_open
              </span>
              <span className="text-error font-mono font-medium line-through">
                bancogenuino-seguridad.com.ar/login
              </span>
              <span className="bg-error-container text-on-error-container text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                Sitio Falso
              </span>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-[16px]">
              refresh
            </span>
          </div>
          {/* Extension Icon Trigger in Toolbar */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary-container flex items-center justify-center text-on-primary shadow-sm animate-pulse">
              <span className="material-symbols-outlined text-[18px]">
                shield
              </span>
            </div>
          </div>
        </div>

        {/* Simulated Web Content with Threat Overlay */}
        <div className="relative p-6 sm:p-10 bg-[#0f172a] min-h-[380px] flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Threat Explanation Context */}
          <div className="flex flex-col gap-4 max-w-md z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error/20 text-error font-label-sm text-label-sm w-fit">
              <span className="material-symbols-outlined text-[16px]">
                gpp_maybe
              </span>
              <span>Intento de Robo de Identidad Neutralizado</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-white font-bold tracking-tight leading-snug">
              AuraGuard detuvo una conexión fraudulenta
            </h3>
            <p className="font-body-md text-body-md text-slate-300">
              Esta página está intentando suplantar la identidad de tu banco
              habitual para quedarse con tus claves de acceso. Se detectaron
              patrones de urgencia artificial.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-1.5 shadow-lg">
                <span className="material-symbols-outlined text-[18px]">
                  exit_to_app
                </span>
                <span>Cerrar pestaña segura</span>
              </button>
              <button className="px-4 py-2 rounded-lg bg-white/10 text-white font-label-md text-label-md hover:bg-white/20 transition-colors">
                Inspección detallada
              </button>
            </div>
          </div>

          {/* Right Side: AuraGuard Popover Card Floating in Browser */}
          <div className="w-full max-w-sm rounded-xl bg-surface-container-lowest p-5 shadow-2xl flex flex-col gap-4 transform lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Popover Header */}
            <div className="flex items-center justify-between pb-3 bg-surface-container-low -mx-5 -mt-5 px-5 py-3 rounded-t-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  verified_user
                </span>
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  Escudo AuraGuard
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-error bg-error-container px-2 py-0.5 rounded font-bold">
                Peligro Crítico
              </span>
            </div>

            {/* Alert Diagnosis */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-error-container/40">
              <span className="material-symbols-outlined text-error text-[24px] flex-shrink-0">
                warning
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-label-sm text-label-sm text-on-error-container font-bold">
                  Urgencia Falsa Detectada
                </span>
                <span className="font-body-md text-[13px] text-on-error-container leading-tight">
                  Se detectó cuenta regresiva de{" "}
                  <strong className="underline">04:59</strong> para forzar la
                  transferencia de fondos.
                </span>
              </div>
            </div>

            {/* URL Analysis Metrics */}
            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2.5 rounded-lg bg-surface-container">
                <span className="font-label-sm text-[10px] text-on-surface-variant block uppercase">
                  Edad de Dominio
                </span>
                <span className="font-label-md text-label-md text-error font-bold">
                  4 días registrado
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container">
                <span className="font-label-sm text-[10px] text-on-surface-variant block uppercase">
                  Certificado SSL
                </span>
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  Gratuito / Anónimo
                </span>
              </div>
            </div>

            {/* Dual Verdict Status Comparison */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low text-xs">
                <span className="text-on-surface-variant font-medium">
                  Sitio Oficial Genuino:
                </span>
                <span className="text-primary font-bold inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    check_circle
                  </span>{" "}
                  Verificado
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-error-container/30 text-xs text-error font-bold">
                <span>Sitio Actual (Este Enlace):</span>
                <span className="inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    dangerous
                  </span>{" "}
                  Clon Malicioso
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 pt-2">
              <button className="w-full py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold shadow-md hover:bg-on-primary-container transition-colors flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[18px]">
                  security
                </span>
                <span>Bloquear y Salir de Aquí</span>
              </button>
              <button className="w-full py-1.5 text-center text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface transition-colors">
                Reportar a la red ciudadana →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Stats Counter Strip */}
      <div className="w-full max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col items-center justify-center gap-1">
          <span className="font-headline-xl text-headline-xl text-primary font-extrabold tracking-tight">
            14,800+
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            Estafas Bloqueadas este mes
          </span>
        </div>
        <div className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col items-center justify-center gap-1">
          <span className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
            100%
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            Código Abierto y Público
          </span>
        </div>
        <div className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col items-center justify-center gap-1">
          <span className="font-headline-xl text-headline-xl text-tertiary font-extrabold tracking-tight">
            0 kb
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            Datos Personales Almacenados
          </span>
        </div>
      </div>
    </section>
  );
}
