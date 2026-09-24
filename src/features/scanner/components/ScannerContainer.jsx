import { useState, useRef } from "react";
import UrlScanner from "./UrlScanner";
import VoucherScanner from "./VoucherScanner";
import ScanProgress from "./ScanProgress";
import DiagnosticResult from "./DiagnosticResult";
import AssistantChatModal from "./AssistantChatModal";
import apiService from "../../../services/api";

export default function ScannerContainer() {
  const [activeTab, setActiveTab] = useState("url"); // 'url' | 'doc'
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusLabel, setStatusLabel] = useState("");
  const [result, setResult] = useState(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [error, setError] = useState(null);

  const scanIntervalRef = useRef(null);

  const handleScan = async (type, targetName) => {
    if (isScanning) return;

    setResult(null);
    setError(null);
    setIsScanning(true);
    setProgress(15);
    setStatusLabel("Iniciando análisis de seguridad...");

    if (scanIntervalRef.current) clearInterval(scanIntervalRef.current);

    let currentProgress = 15;
    scanIntervalRef.current = setInterval(() => {
      currentProgress += 15;

      if (currentProgress >= 90) {
        clearInterval(scanIntervalRef.current);
      } else {
        setProgress(currentProgress);
        if (currentProgress > 30 && currentProgress <= 60) {
          setStatusLabel("Analizando patrones de URL y dominios sospechosos...");
        } else if (currentProgress > 60) {
          setStatusLabel("Evaluando señales de phishing con IA...");
        }
      }
    }, 200);

    try {
      // Extraer dominio de la URL
      let domain = "";
      try {
        const urlObj = new URL(targetName || url);
        domain = urlObj.hostname;
      } catch {
        domain = (targetName || url).replace(/^https?:\/\//, "").split("/")[0];
      }

      // Llamar al backend
      const scanResult = await apiService.createScan({
        url: targetName || url,
        domain: domain,
        title: "",
        visible_text: "",
      });

      clearInterval(scanIntervalRef.current);
      setProgress(100);
      setStatusLabel("Diagnóstico completado.");

      setTimeout(() => {
        setIsScanning(false);
        processBackendResult(scanResult, type, targetName);
      }, 400);
    } catch (err) {
      clearInterval(scanIntervalRef.current);
      setIsScanning(false);
      setError(err.message || "Error al analizar la URL");
      console.error("Scan error:", err);
    }
  };

  const processBackendResult = (scanResult, type, targetName) => {
    const { risk, classification, signals } = scanResult;
    
    // Determinar nivel de riesgo
    let level = "safe";
    if (risk.score >= 0.7) {
      level = "danger";
    } else if (risk.score >= 0.4) {
      level = "warning";
    }

    // Construir descripción basada en señales
    let description = "";
    if (signals.rules && signals.rules.available && signals.rules.triggered_rules.length > 0) {
      const rules = signals.rules.details?.senales || [];
      if (rules.length > 0) {
        description = rules.map(r => r.frase).join(". ") + ".";
      }
    }

    if (signals.kev && signals.kev.available) {
      if (signals.kev.is_phishing > 0.7) {
        description += " El modelo de IA detectó alta probabilidad de phishing.";
      }
    }

    if (!description) {
      description = "No se detectaron señales de riesgo significativas.";
    }

    // Determinar título y badge
    let title = "";
    let badge = "";
    
    if (level === "danger") {
      title = "¡Peligro! Sitio sospechoso detectado";
      badge = "Riesgo Alto";
    } else if (level === "warning") {
      title = "Precaución: Sitio con señales de alerta";
      badge = "Riesgo Moderado";
    } else {
      title = "Sitio aparentemente seguro";
      badge = "Riesgo Bajo";
    }

    setResult({
      type: type,
      level: level,
      target: targetName || url,
      title: title,
      badge: badge,
      description: description,
      risk_score: risk.score,
      classification: classification,
      signals: signals,
    });
  };

  const handleReset = () => {
    setResult(null);
    setIsScanning(false);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-4xl mt-10">
      {/* If scan is finished, display the full Diagnostic Result view */}
      {!isScanning && result ? (
        <DiagnosticResult
          onOpenAssistant={() => setIsAssistantOpen(true)}
          onReset={handleReset}
          targetUrl={result.target}
        />
      ) : (
        <>
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
      />
    </div>
  );
}
