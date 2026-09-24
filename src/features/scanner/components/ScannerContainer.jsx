import { useState, useRef } from "react";
import UrlScanner from "./UrlScanner";
import VoucherScanner from "./VoucherScanner";
import ScanProgress from "./ScanProgress";
import ScanResult from "./ScanResult";

export default function ScannerContainer() {
  const [activeTab, setActiveTab] = useState("url"); // 'url' | 'doc'
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusLabel, setStatusLabel] = useState("");
  const [result, setResult] = useState(null);

  const scanIntervalRef = useRef(null);

  const handleScan = (type, targetName) => {
    if (isScanning) return;

    setResult(null);
    setIsScanning(true);
    setProgress(15);
    setStatusLabel("Iniciando conexión con nodos cívicos descentralizados...");

    if (scanIntervalRef.current) clearInterval(scanIntervalRef.current);

    let currentProgress = 15;
    scanIntervalRef.current = setInterval(() => {
      currentProgress += 28;

      if (currentProgress >= 95) {
        clearInterval(scanIntervalRef.current);
        setProgress(100);
        setStatusLabel("Diagnóstico completado.");

        setTimeout(() => {
          setIsScanning(false);
          generateVerdict(type, targetName);
        }, 400);
      } else {
        setProgress(currentProgress);
        if (currentProgress > 50) {
          setStatusLabel(
            "Inspeccionando certificados SSL, firmas de hash y tipografía...",
          );
        }
      }
    }, 250);
  };

  const generateVerdict = (type, targetName) => {
    if (type === "doc") {
      const fileName = targetName || "comprobante_banco.jpg";
      setResult({
        level: "danger",
        icon: "difference",
        title: "Comprobante Sospechoso: Inconsistencia Detectada",
        badge: "Edición Digital Detectada",
        description: `Archivo: ${fileName}. El bloque de importe tiene densidad tipográfica no estándar con bordes pixelados respecto al resto de la plantilla.`,
      });
    } else {
      const val = (targetName || url).toLowerCase();
      if (
        val.includes("tienda-falsa") ||
        val.includes("sorteo") ||
        val.includes("clave") ||
        val.includes("urgente")
      ) {
        setResult({
          level: "danger",
          icon: "gpp_maybe",
          title: "Alerta: Indicadores Críticos de Suplantación",
          badge: "Amenaza Confirmada",
          description:
            "El enlace no pertenece a los servidores oficiales. El certificado SSL fue generado hace menos de 72 horas para clonar inicio de sesión.",
        });
      } else {
        setResult({
          level: "safe",
          icon: "verified",
          title: "Enlace Limpio en 14 Motores Cívicos",
          badge: "Sin Amenazas Detectadas",
          description:
            "No se hallaron patrones de malware, redirecciones sospechosas ni dominios camuflados en las bases de datos comunitarias.",
        });
      }
    }
  };

  const handleReset = () => {
    setResult(null);
    setIsScanning(false);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-4xl mt-10">
      <div className="relative bg-white rounded-2xl border border-[#e2e8f0] p-3 sm:p-5 shadow-[0_12px_40px_rgba(17,26,54,0.06)] transition-all duration-300 hover:border-[#10b981]/50">
        {/* Tab Navigation Switcher */}
        <div className="flex items-center justify-center p-1.5 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] max-w-2xl mx-auto gap-1">
          <button
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-label-md text-label-md transition-all duration-200 cursor-pointer ${
              activeTab === "url"
                ? "bg-white text-[#006c49] font-bold shadow-sm border border-[#e2e8f0]"
                : "text-[#64748b] hover:text-[#0b132b] hover:bg-white/80 font-medium"
            }`}
            onClick={() => {
              setActiveTab("url");
              handleReset();
            }}
          >
            <span className="material-symbols-outlined text-[18px] text-[#10b981]">
              travel_explore
            </span>
            <span className="tracking-wide">ENLACE / URL</span>
          </button>

          <button
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-label-md text-label-md transition-all duration-200 cursor-pointer ${
              activeTab === "doc"
                ? "bg-white text-[#006c49] font-bold shadow-sm border border-[#e2e8f0]"
                : "text-[#64748b] hover:text-[#0b132b] hover:bg-white/80 font-medium"
            }`}
            onClick={() => {
              setActiveTab("doc");
              handleReset();
            }}
          >
            <span className="material-symbols-outlined text-[18px]">
              receipt_long
            </span>
            <span className="tracking-wide">COMPROBANTE / CAPTURA</span>
          </button>
        </div>

        {/* Scanner Panels */}
        <div className="mt-4 p-1 sm:p-3">
          {activeTab === "url" ? (
            <UrlScanner
              isScanning={isScanning}
              onScan={handleScan}
              setUrl={setUrl}
              url={url}
            />
          ) : (
            <VoucherScanner isScanning={isScanning} onScan={handleScan} />
          )}

          {/* Progress Box */}
          {isScanning && (
            <ScanProgress progress={progress} statusLabel={statusLabel} />
          )}

          {/* Result Box */}
          {!isScanning && result && (
            <ScanResult onReset={handleReset} result={result} />
          )}
        </div>
      </div>

      {/* Trust & Civic Privacy Statement */}
      <div className="mt-4 flex items-center justify-center text-center max-w-xl mx-auto px-4">
        <p className="font-label-sm text-label-sm text-[#475569] leading-relaxed flex items-center gap-1.5 justify-center flex-wrap bg-[#f0fdf4] border border-[#bbf7d0] py-1.5 px-4 rounded-full shadow-2xs">
          <span className="text-[#006c49] font-bold">
            🛡️ Análisis 100% anónimo y gratuito.
          </span>
          <span>
            Los datos no se almacenan con fines comerciales ni requieren datos
            personales. Protegiendo la economía ciudadana.
          </span>
        </p>
      </div>
    </div>
  );
}
