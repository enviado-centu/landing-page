export default function DefenseLayers() {
  return (
    <section
      className="w-full py-20 max-w-7xl mx-auto px-gutter flex flex-col gap-16"
      id="como-funciona"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
          Cómo te cuida mientras navegás
        </span>
        <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
          Tres capas de defensa comunitaria
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Tu navegador se convierte en un radar preventivo que frena el engaño
          antes del primer clic.
        </p>
      </div>

      {/* Feature 1: Semáforo al instante */}
      <div className="p-8 md:p-12 rounded-3xl bg-surface-container flex flex-col lg:flex-row items-center gap-10 shadow-sm">
        <div className="flex-1 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md font-bold">
            <span className="material-symbols-outlined">traffic</span>
            <span>Capa 1 • Clasificación Inmediata</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Semáforo de Confianza al Instante
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Muestra una etiqueta verde, amarilla o roja al abrir o posar el
            cursor sobre cualquier enlace sospechoso en WhatsApp Web, redes
            sociales o correos electrónicos. Sabés con precisión quién está
            detrás de cada vínculo.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>{" "}
              Sitio Seguro
            </span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>{" "}
              Desconocido / Precaución
            </span>
            <span className="px-3 py-1.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-error"></span> Amenaza
              Confirmada
            </span>
          </div>
        </div>

        {/* Feature 1 Mockup (Simulated WhatsApp Web preview) */}
        <div className="w-full lg:w-1/2 p-6 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col gap-4">
          <div className="text-xs font-semibold text-on-surface-variant pb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-primary">
              chat
            </span>
            <span>Simulación: Mensajería con vínculo recibido</span>
          </div>
          {/* Safe message bubble */}
          <div className="p-3.5 rounded-xl bg-surface-container-low max-w-sm flex flex-col gap-1.5 text-left">
            <p className="font-body-md text-body-md text-on-surface">
              Hola, fijate la publicación original acá:
            </p>
            <div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between">
              <span className="text-xs font-mono text-on-surface-variant truncate">
                mercadolibre.com.ar/art-2901
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-[10px] font-bold">
                <span className="material-symbols-outlined text-[12px]">
                  verified
                </span>{" "}
                100% Oficial
              </span>
            </div>
          </div>
          {/* Trap message bubble with AuraGuard intervention */}
          <div className="p-3.5 rounded-xl bg-error-container/30 max-w-sm flex flex-col gap-2 text-left self-end">
            <p className="font-body-md text-body-md text-on-surface">
              "Aviso: tu cuenta fue suspendida. Ingresá urgente:"
            </p>
            <div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1.5">
              <span className="text-xs font-mono text-error line-through truncate">
                soporte-verificacion-urgente.online
              </span>
              <div className="flex items-center gap-1.5 text-error font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-[16px]">
                  shield_with_heart
                </span>
                <span>¡Cuidado! Dominio engañoso reportado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2: Clic Derecho Scan */}
      <div className="p-8 md:p-12 rounded-3xl bg-surface-container flex flex-col lg:flex-row-reverse items-center gap-10 shadow-sm">
        <div className="flex-1 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md font-bold">
            <span className="material-symbols-outlined">ads_click</span>
            <span>Capa 2 • Diagnóstico Bajo Demanda</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Inspección de Enlaces con Clic Derecho
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            ¿Tenés dudas de un enlace antes de tocarlo? Simplemente hacé clic
            derecho sobre el texto o botón y seleccioná{" "}
            <strong className="text-on-surface font-semibold">
              "Verificar con AuraGuard"
            </strong>
            . Analizamos la procedencia del servidor y certificados en
            milisegundos sin abrir la página en tu equipo.
          </p>
          <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-primary text-[16px]">
                check
              </span>{" "}
              DNS seguro
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-primary text-[16px]">
                check
              </span>{" "}
              Análisis de redirecciones
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-primary text-[16px]">
                check
              </span>{" "}
              Reputación histórica
            </span>
          </div>
        </div>

        {/* Feature 2 Mockup (Context Menu Simulation) */}
        <div className="w-full lg:w-1/2 p-6 rounded-2xl bg-surface-container-lowest shadow-md flex items-center justify-center">
          <div className="w-72 rounded-xl bg-surface-container-lowest shadow-xl p-2 flex flex-col gap-1 text-sm font-medium text-on-surface">
            <div className="px-3 py-1.5 rounded text-on-surface-variant hover:bg-surface-container cursor-pointer flex items-center justify-between text-xs">
              <span>Abrir enlace en una pestaña nueva</span>
              <span className="material-symbols-outlined text-[14px]">
                open_in_new
              </span>
            </div>
            <div className="px-3 py-1.5 rounded text-on-surface-variant hover:bg-surface-container cursor-pointer flex items-center justify-between text-xs">
              <span>Copiar dirección del enlace</span>
              <span className="material-symbols-outlined text-[14px]">
                content_copy
              </span>
            </div>
            <div className="h-[1px] bg-surface-container my-1"></div>
            {/* AuraGuard context option (highlighted) */}
            <div className="px-3 py-2 rounded-lg bg-primary text-on-primary font-semibold flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  verified_user
                </span>
                <span>Verificar con AuraGuard</span>
              </div>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded uppercase font-bold">
                Listo
              </span>
            </div>
            <div className="mt-2 p-2.5 rounded-lg bg-surface-container-low text-xs flex flex-col gap-1">
              <span className="text-on-surface-variant font-medium">
                Dictamen instantáneo:
              </span>
              <span className="text-primary font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  check
                </span>{" "}
                Servidor de confianza verificado
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 3: Escudo Comunitario Activo */}
      <div className="p-8 md:p-12 rounded-3xl bg-surface-container flex flex-col lg:flex-row items-center gap-10 shadow-sm">
        <div className="flex-1 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md font-bold">
            <span className="material-symbols-outlined">groups</span>
            <span>Capa 3 • Inteligencia Colectiva</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Escudo Comunitario y Solidario
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Si un vecino, jubilado o comerciante detecta una nueva modalidad de
            estafa y la reporta, el sistema distribuye una alerta defensiva a
            toda la red en segundos. Una comunidad organizada es invulnerable a
            las trampas individuales.
          </p>
          <div className="p-4 rounded-xl bg-surface-container-lowest flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container/20 text-primary flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-bold">
                Red Cívica en Vivo
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                42,000+ guardianes activos protegiendo el ecosistema local
              </span>
            </div>
          </div>
        </div>

        {/* Feature 3 Visual: Live Network Diagram */}
        <div className="w-full lg:w-1/2 p-6 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col items-center justify-center text-center">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Ambient animated rings */}
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping"></div>
            <div className="absolute inset-4 rounded-full bg-primary/15"></div>
            <div className="absolute inset-12 rounded-full bg-primary/25"></div>
            {/* Central Hub */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-primary text-on-primary flex flex-col items-center justify-center shadow-xl">
              <span className="material-symbols-outlined text-[32px]">
                shield
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">
                AuraGuard
              </span>
            </div>
            {/* Orbiting verified nodes */}
            <div className="absolute top-2 left-6 px-2.5 py-1 rounded-full bg-surface-container shadow-md text-xs font-bold text-on-surface flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary"></span>{" "}
              Comerciante
            </div>
            <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded-full bg-surface-container shadow-md text-xs font-bold text-on-surface flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary"></span> Adulto
              Mayor
            </div>
            <div className="absolute top-12 right-2 px-2.5 py-1 rounded-full bg-surface-container shadow-md text-xs font-bold text-on-surface flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary"></span>{" "}
              Comprador
            </div>
            <div className="absolute bottom-10 right-4 px-2.5 py-1 rounded-full bg-surface-container shadow-md text-xs font-bold text-on-surface flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary"></span>{" "}
              Estudiante
            </div>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant mt-2">
            Sincronización distribuida sin recolección de IPs personales
          </span>
        </div>
      </div>
    </section>
  );
}
