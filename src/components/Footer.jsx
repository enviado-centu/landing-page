export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-xl">
      <div className="w-full max-w-7xl mx-auto px-gutter py-space-xl flex flex-col gap-space-lg">
        {/* Top Status Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md pb-space-lg border-b border-surface-container-highest">
          <div className="flex items-center gap-space-sm">
            <div className="w-3 h-3 rounded-full bg-primary-container animate-pulse"></div>
            <p className="font-label-md text-label-md text-on-surface-variant">
              Iniciativa Comunitaria de Código Abierto • Defendiendo la
              seguridad digital de todos
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-primary text-[14px]">
                verified_user
              </span>{" "}
              Red Cívica Segura
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-tertiary text-[14px]">
                lock_open_right
              </span>{" "}
              100% Auditado
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-primary-container text-[14px]">
                public
              </span>{" "}
              DNS Seguro Activo
            </span>
          </div>
        </div>

        {/* 4-column Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
              AuraGuard
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tecnología ciudadana para la prevención proactiva de fraudes,
              phishing y estafas bancarias en tiempo real.
            </p>
          </div>

          <div className="flex flex-col gap-space-xs">
            <span className="font-label-lg text-label-lg text-on-surface font-bold">
              Recursos Cívicos
            </span>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              Repositorio GitHub
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              Guía para Comerciantes
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              Políticas Comunitarias
            </a>
          </div>

          <div className="flex flex-col gap-space-xs">
            <span className="font-label-lg text-label-lg text-on-surface font-bold">
              Protección Activa
            </span>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              Reportar Estafa Manualmente
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              Política de Privacidad Ciudadana
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              Panel de Amenazas Globales
            </a>
          </div>

          <div className="flex flex-col gap-space-xs">
            <span className="font-label-lg text-label-lg text-on-surface font-bold">
              Compatibilidad
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              Google Chrome, Brave, Chromium Edge
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              Licencia Libre GPLv3
            </span>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-surface-container-highest">
          <p className="font-body-md text-body-md text-on-surface-variant">
            © 2024 AuraGuard Shield. Desarrollado con transparencia e interés
            público.
          </p>
          <div className="flex items-center gap-space-md">
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              Términos de Servicio
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              Privacidad
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              Transparencia Algorítmica
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
