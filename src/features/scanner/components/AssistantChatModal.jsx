import { useState, useRef, useEffect } from "react";
import BotAvatar from "./BotAvatar";

const NIVEL_TEXTO = { high: "riesgo alto", medium: "riesgo medio", low: "riesgo bajo" };
const NIVEL_COLOR = { high: "text-rose-600", medium: "text-amber-600", low: "text-emerald-600" };

function mensajeInicial(scan) {
  const resumen = scan?.summary;
  if (!resumen) {
    return (
      <span>
        ¡Hola! ¿Qué te ocurrió o qué te preocupa? Estoy acá para ayudarte paso a paso.
      </span>
    );
  }
  return (
    <span>
      ¡Hola! Vi que analizaste <strong>{scan.target.domain}</strong> y dio{" "}
      <span className={`font-bold ${NIVEL_COLOR[resumen.level]}`}>
        {NIVEL_TEXTO[resumen.level]} ({resumen.score_100}%)
      </span>
      . ¿Qué te ocurrió o qué te preocupa? Estoy acá para ayudarte paso a paso.
    </span>
  );
}

export default function AssistantChatModal({ isOpen, onClose, scan }) {
  // Demo: las respuestas son de ejemplo, todavía no hay un asistente real conectado
  const [messages, setMessages] = useState([
    {
      id: 2,
      sender: "user",
      time: "14:33",
      text: "Me mandaron un WhatsApp diciendo que mi cuenta fue suspendida y que entre a ese link... casi pongo mi clave pero dudé.",
    },
    {
      id: 3,
      sender: "bot",
      time: "14:33",
      text: (
        <div className="space-y-2.5">
          <p className="font-medium text-slate-900">
            ¡Hiciste muy bien en dudar! 👏 Es un engaño (phishing) para sacarte
            la cuenta.
          </p>
          <p className="text-slate-600">
            Si no pusiste tu clave ni códigos por SMS, estás totalmente a salvo.
          </p>
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl text-[12px] font-semibold border border-emerald-100">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">
              lock
            </span>
            <span>Consejo: bloqueá ese número y no abras el link.</span>
          </div>
        </div>
      ),
    },
  ]);

  const [inputText, setInputText] = useState("");
  const chatBottomRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    const newMsg = {
      id: Date.now(),
      sender: "user",
      time: timeStr,
      text: userText,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText("");

    // Simulate intelligent civic assistant response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: "bot",
        time: timeStr,
        text: (
          <div className="space-y-2">
            <p className="text-slate-700">
              Recordá que <strong>ningún banco ni billetera virtual</strong> te
              va a pedir tu contraseña ni un código de verificación por WhatsApp
              o mensaje privado.
            </p>
            <p className="text-slate-600 text-xs">
              Si llegaste a compartir algún dato, cambiá tu contraseña urgente
              desde la aplicación oficial en tu celular y avisá a tu entidad
              bancaria.
            </p>
          </div>
        ),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 700);
  };

  return (
    <>
      {/* Dimmed backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-over Right Sidebar Drawer */}
      <aside
        aria-label="Asistente Cívico AuraGuard"
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] bg-white shadow-[-8px_0_30px_rgba(0,0,0,0.1)] border-l border-slate-200 flex flex-col h-full transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sleek Header */}
        <div className="px-5 py-4 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-2xl bg-emerald-50 p-1 flex items-center justify-center shadow-sm">
              <BotAvatar className="w-full h-full object-contain rounded-xl" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="font-headline-sm text-[17px] font-bold text-slate-900 leading-tight">
                  AuraGuard Asistente
                </h2>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                  En línea
                </span>
              </div>
              <p className="text-[12px] text-slate-500 font-medium">
                Asistente Cívico Antifraude • Anónimo
              </p>
            </div>
          </div>

          <button
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            onClick={onClose}
            title="Cerrar asistente"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="px-4 py-2 bg-amber-50 border-b border-amber-200 text-amber-800 text-[12px] font-semibold flex items-center gap-1.5 shrink-0">
          <span className="material-symbols-outlined text-[16px]">science</span>
          <span>Demo: las respuestas del asistente son de ejemplo.</span>
        </div>

        {/* Chat Conversation Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
          {/* Timestamp chip */}
          <div className="flex justify-center my-1">
            <span className="text-[11px] font-medium text-slate-400 bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-slate-100">
              Hoy • Consulta segura
            </span>
          </div>

          {[{ id: 0, sender: "bot", time: "14:32", text: mensajeInicial(scan) }, ...messages].map((msg) =>
            msg.sender === "bot" ? (
              <div
                key={msg.id}
                className="flex items-start gap-2.5 max-w-[88%]"
              >
                <div className="w-7 h-7 rounded-xl bg-emerald-100 p-0.5 shrink-0 flex items-center justify-center mt-0.5">
                  <BotAvatar className="w-full h-full object-contain rounded-lg" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 text-slate-800 text-[14px] leading-relaxed">
                    {msg.text}
                  </div>
                  <span className="text-[11px] text-slate-400 px-1">
                    AuraGuard • {msg.time}
                  </span>
                </div>
              </div>
            ) : (
              <div
                key={msg.id}
                className="flex items-start gap-2.5 max-w-[88%] ml-auto flex-row-reverse"
              >
                <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">
                    person
                  </span>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <div className="bg-emerald-600 text-white p-3.5 rounded-2xl rounded-tr-sm shadow-sm text-[14px] leading-relaxed">
                    {msg.text}
                  </div>
                  <span className="text-[11px] text-slate-400 px-1">
                    Vos • {msg.time}
                  </span>
                </div>
              </div>
            ),
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar Area */}
        <div className="p-3.5 bg-white border-t border-slate-100 shrink-0 flex flex-col gap-1.5">
          <form
            className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-500 rounded-full px-3 py-1.5 border border-slate-200/80 transition-all"
            onSubmit={handleSendMessage}
          >
            <button
              className="p-1 text-slate-400 hover:text-emerald-600 rounded-full transition-colors flex items-center justify-center cursor-pointer"
              title="Adjuntar imagen o captura"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                attach_file
              </span>
            </button>
            <input
              autoComplete="off"
              className="flex-1 bg-transparent py-1 text-[13.5px] text-slate-800 placeholder:text-slate-400 focus:outline-none min-w-0"
              placeholder="Escribí tu mensaje o duda aquí..."
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm transition-all cursor-pointer disabled:opacity-50"
              disabled={!inputText.trim()}
              title="Enviar"
              type="submit"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_upward
              </span>
            </button>
          </form>
          <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 font-medium">
            <span className="material-symbols-outlined text-[13px] text-emerald-600">
              verified_user
            </span>
            <span>100% anónimo • Sin registros</span>
          </div>
        </div>
      </aside>
    </>
  );
}
