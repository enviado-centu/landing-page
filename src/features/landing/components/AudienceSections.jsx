export default function AudienceSections() {
  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Soluciones a medida de la vida real
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
            Cuidado pensado para cada sector vulnerable
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Para Comercios Card */}
          <div
            className="p-8 md:p-10 rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-8"
            id="para-comercios"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  storefront
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
                Para Comercios y Emprendedores
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Blindaje contra comprobantes truchos y cobros fantasma
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Si vendés por WhatsApp, Instagram o página web, los delincuentes
                suelen mandar links falsos imitando bancos o pasarelas de pago
                con "comprobantes pendientes" para que entregues la mercadería.
                AuraGuard detecta estas pantallas apócrifas al segundo.
              </p>
              <ul className="flex flex-col gap-2.5 pt-2 text-on-surface text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    check_circle
                  </span>
                  <span>Verificación de pasarelas de pago oficiales</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    check_circle
                  </span>
                  <span>
                    Alerta ante dominios con tipografía fraudulenta (punycode)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    check_circle
                  </span>
                  <span>
                    Guía comunitaria para evitar el engaño de la transferencia
                    postergada
                  </span>
                </li>
              </ul>
            </div>
            {/* Image Placeholder */}
            <div className="h-48 w-full rounded-2xl overflow-hidden relative shadow-inner">
              <img
                alt="Comerciante atendiendo con tranquilidad"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO9rJgeY9o6lohBtlVeKCHWllO0mR_aM0Guge0qp_FpTTbUDmeLfWhuUBieGruOsy25wgxHY5QGxj-mA0E4Oj6rBItK_IsLiVMewNb_XkbLg9V7KlFofZ3YxU6I4n-pkNxiStlc3b0QprxsokrLWfqdlPYTn5_BP2t3b0zHd8fxnRZE6yuPs0o88vwQbyICxQj2eemx3cp6RFP1vZFxpEW7PbQB2V9Po-6UX4nAD1AeE8ikNhtf-qb"
              />
            </div>
          </div>

          {/* Para Seguridad Ciudadana & Adultos Mayores */}
          <div
            className="p-8 md:p-10 rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-8"
            id="seguridad-ciudadana"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-tertiary-container/20 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  family_restroom
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">
                Para Familias y Adultos Mayores
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Tranquilidad para los que más querés
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                El phishing bancario ataca ferozmente a jubilados y personas que
                están aprendiendo a usar homebanking. AuraGuard funciona como un
                acompañante constante: si intentan ingresar a una página
                engañosa, la pantalla se frena con un cartel gigante e
                inteligible.
              </p>
              <ul className="flex flex-col gap-2.5 pt-2 text-on-surface text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    check_circle
                  </span>
                  <span>
                    Sin tecnicismos: mensajes en español claro y directo
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    check_circle
                  </span>
                  <span>Botón grande para salir inmediatamente sin riesgo</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    check_circle
                  </span>
                  <span>
                    Se instala una sola vez y no pide renovaciones ni
                    contraseñas
                  </span>
                </li>
              </ul>
            </div>
            {/* Image Placeholder */}
            <div className="h-48 w-full rounded-2xl overflow-hidden relative shadow-inner">
              <img
                alt="Adulto mayor utilizando tecnología con seguridad"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBOlAOLntsGCqvNrWk4KLUHiOHumvdFc3fuURATu8TZAj_3pEiGju7htEaJFNRM67BBd-2JI6zIgXrSpmnABlvDu--RhQqYBgLhaA307mpcFQUlc20Pijco6AYbrp4E_OAIyt8vXOFkIJzx9XlYiq0F1wa-aIM5bwkyxJczHMSk_421y8x1-8PKuvxA7isMfyI6aCgrRIX6ydGuoITp-txFWb_6S-ISaJsSDvdkEvv3Mk4w7n9N7e3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
