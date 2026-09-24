export default function BotAvatar({ className = "w-full h-full" }) {
  return (
    <svg
      className={className}
      height="100%"
      viewBox="0 0 256 256"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fondo Suave (Squircle) */}
      <rect fill="#ECFAF3" height="256" rx="68" width="256" />

      {/* Pin / Escudo de Fondo Verde */}
      <path
        d="M128 30
           C78 30 55 72 55 120
           c0 48 36 94 73 132
           4 4 4 4 7 0
           37-38 73-84 73-132
           0-48-23-90-73-90Z"
        fill="#05A66B"
      />

      {/* Antena del Robot */}
      {/* Poste de la antena */}
      <rect fill="#FFFFFF" height="22" rx="5" width="10" x="123" y="58" />
      {/* Aro exterior de la punta */}
      <circle cx="128" cy="54" fill="#46D89E" r="10" />
      {/* Centro blanco de la punta */}
      <circle cx="128" cy="54" fill="#FFFFFF" r="5" />

      {/* Orejas / Conectores Laterales */}
      <rect fill="#D3DDE6" height="38" rx="8" width="112" x="72" y="100" />

      {/* Cabeza / Carcasa Exterior Blanca */}
      <rect fill="#F4F7FB" height="92" rx="34" width="104" x="76" y="72" />

      {/* Pantalla Interior Oscura */}
      <rect fill="#151A30" height="52" rx="20" width="80" x="88" y="88" />

      {/* Ojos Verdes Brillantes */}
      {/* Ojo Izquierdo */}
      <circle cx="111" cy="110" fill="#1AD78B" r="9" />
      <circle cx="113.5" cy="107.5" fill="#FFFFFF" r="3" />

      {/* Ojo Derecho */}
      <circle cx="145" cy="110" fill="#1AD78B" r="9" />
      <circle cx="147.5" cy="107.5" fill="#FFFFFF" r="3" />

      {/* Sonrisa Curva */}
      <path
        d="M119 123 C124 130 132 130 137 123"
        fill="none"
        stroke="#1AD78B"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
    </svg>
  );
}
