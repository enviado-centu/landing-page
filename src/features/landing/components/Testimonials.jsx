export default function Testimonials() {
  const starIcon = (
    <span
      className="material-symbols-outlined text-[18px]"
      style={{ fontVariationSettings: "'FILL' 1" }}
    >
      star
    </span>
  );

  return (
    <section className="w-full py-20 max-w-7xl mx-auto px-gutter flex flex-col gap-12">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
          Testimonios de vecinos
        </span>
        <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
          Historias reales de la comunidad protegida
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Vecinos y comerciantes cuentan cómo el escudo evitó dolores de cabeza
          irreparables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile 1 */}
        <div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between gap-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1 text-primary">
              {starIcon}
              {starIcon}
              {starIcon}
              {starIcon}
              {starIcon}
            </div>
            <p className="font-body-lg text-body-lg text-on-surface italic leading-relaxed">
              “Evité entregar mercadería de $180.000 con una pasarela de pago
              falsa que me pasaron por mensaje privado en Instagram. AuraGuard
              me saltó en rojo al instante.”
            </p>
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-surface-container-highest">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold font-label-md">
              MG
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-bold">
                Marcos G.
              </span>
              <span className="font-body-md text-xs text-on-surface-variant">
                Comerciante de Indumentaria
              </span>
            </div>
          </div>
        </div>

        {/* Profile 2 */}
        <div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between gap-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1 text-primary">
              {starIcon}
              {starIcon}
              {starIcon}
              {starIcon}
              {starIcon}
            </div>
            <p className="font-body-lg text-body-lg text-on-surface italic leading-relaxed">
              “Me saltó el cartel rojo cuando me quisieron hacer cambiar la
              clave bancaria por un correo electrónico trucho. Me salvó los
              ahorros de la jubilación.”
            </p>
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-surface-container-highest">
            <div className="w-10 h-10 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-bold font-label-md">
              ER
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-bold">
                Elena R. (68 años)
              </span>
              <span className="font-body-md text-xs text-on-surface-variant">
                Jubilada y Abuela
              </span>
            </div>
          </div>
        </div>

        {/* Profile 3 */}
        <div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between gap-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1 text-primary">
              {starIcon}
              {starIcon}
              {starIcon}
              {starIcon}
              {starIcon}
            </div>
            <p className="font-body-lg text-body-lg text-on-surface italic leading-relaxed">
              “Rápida, no consume memoria y te explica en criollo sin vueltas
              técnicas. Se la instalé en las computadoras a toda mi familia y
              navegan con otra paz mental.”
            </p>
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-surface-container-highest">
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold font-label-md">
              JM
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-bold">
                Julián M.
              </span>
              <span className="font-body-md text-xs text-on-surface-variant">
                Estudiante de Ingeniería
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
