export default function CommunityFeed() {
  const detections = [
    {
      domain: "clon-mercadopago-sorteo.tk",
      time: "hace 4m",
      status: "BLOQUEADO",
      statusType: "danger",
      icon: "phishing",
      category: "Clon de pasarela de pago",
    },
    {
      domain: "comprobante-transferencia-falso.pdf",
      time: "hace 11m",
      status: "BLOQUEADO",
      statusType: "danger",
      icon: "difference",
      category: "Tipografía alterada / Recibo apócrifo",
    },
    {
      domain: "soporte-bancario-urgente.com",
      time: "hace 18m",
      status: "PRECAUCIÓN",
      statusType: "warning",
      icon: "schedule",
      category: "Dominio creado hace 2 días",
    },
  ];

  return (
    <div className="w-full max-w-4xl mt-10">
      {/* Feed Header */}
      <div className="flex items-center justify-between pb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
          <h2 className="font-label-md text-label-md text-[#0b132b] tracking-wider uppercase font-bold">
            Detecciones Comunitarias en Tiempo Real
          </h2>
        </div>
        <span className="font-label-sm text-label-sm text-[#64748b] font-medium">
          Actualizado hace 3 min
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {detections.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between p-4 rounded-xl bg-white border border-[#e2e8f0] transition-colors shadow-2xs ${
              item.statusType === "danger"
                ? "hover:border-[#dc2626]/40"
                : "hover:border-[#d97706]/40"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className={`font-label-sm text-label-sm px-2 py-0.5 rounded font-bold ${
                  item.statusType === "danger"
                    ? "bg-[#fee2e2] text-[#dc2626]"
                    : "bg-[#fef3c7] text-[#d97706]"
                }`}
              >
                {item.status}
              </span>
              <span className="font-label-sm text-label-sm text-[#64748b]">
                {item.time}
              </span>
            </div>

            <p className="font-body-md text-body-md text-[#0f172a] font-mono font-medium truncate mt-2">
              {item.domain}
            </p>

            <div className="flex items-center gap-1.5 mt-2 font-label-sm text-label-sm text-[#475569]">
              <span
                className={`material-symbols-outlined text-[15px] ${
                  item.statusType === "danger"
                    ? "text-[#dc2626]"
                    : "text-[#d97706]"
                }`}
              >
                {item.icon}
              </span>
              <span>{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
