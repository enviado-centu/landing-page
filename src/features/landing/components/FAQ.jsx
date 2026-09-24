export default function FAQ() {
  const faqs = [
    {
      question: "¿Es realmente gratis?",
      answer:
        "Sí, 100% gratis y sin versiones de pago ocultas. AuraGuard es un proyecto de tecnología cívica financiado por iniciativas comunitarias de ciberseguridad abierta y software de interés público. No cobramos suscripciones ni mostramos anuncios comerciales.",
      defaultOpen: true,
    },
    {
      question: "¿La extensión lee mis contraseñas o datos personales?",
      answer:
        "Bajo ninguna circunstancia. AuraGuard procesa las direcciones web y las cabeceras de seguridad exclusivamente de forma local en tu computadora. No tiene acceso a tus claves, no guarda tu historial de navegación y jamás vende información a terceros. Nuestro código está libre y publicado en GitHub para auditoría ciudadana constante.",
      defaultOpen: false,
    },
    {
      question: "¿Funciona si uso WhatsApp Web o abro correos electrónicos?",
      answer:
        "Sí. La extensión actúa sobre el navegador de tu computadora, por lo que te asiste cuando abrís enlaces recibidos en WhatsApp Web, Telegram Web, Gmail, Outlook y publicaciones o mensajes de redes sociales.",
      defaultOpen: false,
    },
    {
      question: "¿Cómo se desinstala si ya no la quiero usar?",
      answer:
        "Con sólo dos clics. Podés hacer clic derecho en el ícono del escudo en tu navegador y presionar “Desinstalar de Chrome/Brave/Edge”. No deja programas secundarios ni rastros en tu disco rígido.",
      defaultOpen: false,
    },
  ];

  return (
    <section
      className="w-full bg-surface-container-lowest py-20"
      id="preguntas-frecuentes"
    >
      <div className="max-w-4xl mx-auto px-gutter flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center flex flex-col gap-3">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Transparencia Total
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
            Preguntas Frecuentes
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Respuestas sencillas sobre privacidad, funcionamiento y gratuidad.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group p-6 rounded-2xl bg-surface-container-low [&_summary::-webkit-details-marker]:hidden cursor-pointer"
              defaultOpen={faq.defaultOpen}
            >
              <summary className="flex items-center justify-between text-on-surface font-headline-sm text-headline-sm font-semibold select-none">
                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="pt-4 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
