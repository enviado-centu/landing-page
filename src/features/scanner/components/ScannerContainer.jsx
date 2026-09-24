import { useState, useRef, useEffect } from "react";
import UrlScanner from "./UrlScanner";
import ScanProgress from "./ScanProgress";
import DiagnosticResult from "./DiagnosticResult";
import AssistantChatModal from "./AssistantChatModal";
import apiService from "../../../services/api";
import { normalizarUrl } from "../normalizarUrl";

export default function ScannerContainer() {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusLabel, setStatusLabel] = useState("");
  const [result, setResult] = useState(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [error, setError] = useState(null);

  const scanIntervalRef = useRef(null);

  useEffect(() => () => clearInterval(scanIntervalRef.current), []);

  const handleScan = async (texto) => {
    if (isScanning) return;

    setResult(null);
    setError(null);

    let urlNormalizada;
    try {
      urlNormalizada = normalizarUrl(texto);
    } catch (err) {
      setError(err.message);
      return;
    }
    setUrl(urlNormalizada);

    setIsScanning(true);
    setProgress(15);
    setStatusLabel("Iniciando análisis de seguridad...");

    clearInterval(scanIntervalRef.current);
    let currentProgress = 15;
    scanIntervalRef.current = setInterval(() => {
      currentProgress += 15;
      if (currentProgress >= 90) {
        clearInterval(scanIntervalRef.current);
        return;
      }
      setProgress(currentProgress);
      if (currentProgress > 30 && currentProgress <= 60) {
        setStatusLabel("Analizando patrones de URL y dominios sospechosos...");
      } else if (currentProgress > 60) {
        setStatusLabel("Evaluando señales de phishing...");
      }
    }, 200);

    try {
      const scan = await apiService.createScan({ url: urlNormalizada });

      clearInterval(scanIntervalRef.current);
      setProgress(100);
      setStatusLabel("Diagnóstico completado.");

      setTimeout(() => {
        setIsScanning(false);
        setResult(scan);
      }, 400);
    } catch (err) {
      clearInterval(scanIntervalRef.current);
      setIsScanning(false);
      setError(err.message || "No se pudo analizar la dirección.");
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setIsScanning(false);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-4xl mt-10">
      {!isScanning && result ? (
        <DiagnosticResult
          scan={result}
          onOpenAssistant={() => setIsAssistantOpen(true)}
          onReset={handleReset}
        />
      ) : (
        <>
          <div className="relative bg-white rounded-2xl border border-[#e2e8f0] p-3 sm:p-5 shadow-[0_12px_40px_rgba(17,26,54,0.06)] transition-all duration-300 hover:border-[#10b981]/50">
            {/* Tab Navigation Switcher */}
            <div className="flex items-center justify-center p-1.5 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] max-w-2xl mx-auto gap-1">
              <button
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-label-md text-label-md transition-all duration-200 bg-white text-[#006c49] font-bold shadow-sm border border-[#e2e8f0]"
                aria-pressed="true"
              >
                <span className="material-symbols-outlined text-[18px] text-[#10b981]">
                  travel_explore
                </span>
                <span className="tracking-wide">ENLACE / URL</span>
              </button>

              {/* Todavía no existe análisis de comprobantes: la pestaña queda deshabilitada */}
              <button
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-label-md text-label-md text-[#94a3b8] font-medium cursor-not-allowed"
                disabled
                title="El análisis de comprobantes y capturas todavía no está disponible"
              >
                <span className="material-symbols-outlined text-[18px]">
                  receipt_long
                </span>
                <span className="tracking-wide">COMPROBANTE / CAPTURA</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  Próximamente
                </span>
              </button>
            </div>

            {/* Scanner Panel */}
            <div className="mt-4 p-1 sm:p-3">
              <UrlScanner
                isScanning={isScanning}
                onScan={handleScan}
                setUrl={setUrl}
                url={url}
              />

              {error && (
                <div
                  role="alert"
                  className="mt-3 flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
                >
                  <span className="material-symbols-outlined text-[18px] shrink-0">
                    error
                  </span>
                  <span>{error}</span>
                </div>
              )}

              {isScanning && (
                <ScanProgress progress={progress} statusLabel={statusLabel} />
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
                Los datos no se almacenan con fines comerciales ni requieren
                datos personales. Protegiendo la economía ciudadana.
              </span>
            </p>
          </div>
        </>
      )}

      {/* Interactive Civic Assistant Modal */}
      <AssistantChatModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        scan={result}
      />
    </div>
  );
}
