export default function ScanResult({ result, onReset }) {
  if (!result) return null;

  const isDanger = result.level === "danger";
  const isSafe = result.level === "safe";

  return (
    <div className="mt-4 p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-start gap-3">
        {/* Icon Container */}
        <div
          className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
            isDanger
              ? "bg-[#fee2e2] border-[#fecaca] text-[#dc2626]"
              : isSafe
                ? "bg-[#f0fdf4] border-[#bbf7d0] text-[#10b981]"
                : "bg-[#fef3c7] border-[#fde68a] text-[#d97706]"
          }`}
        >
          <span className="material-symbols-outlined text-[24px]">
            {result.icon}
          </span>
        </div>

        {/* Text Verdict */}
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-headline-sm text-[18px] text-[#0f172a] font-bold">
              {result.title}
            </span>
            <span
              className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full border font-bold ${
                isDanger
                  ? "bg-[#fee2e2] text-[#dc2626] border-[#fecaca]"
                  : isSafe
                    ? "bg-[#f0fdf4] text-[#006c49] border-[#bbf7d0]"
                    : "bg-[#fef3c7] text-[#d97706] border-[#fde68a]"
              }`}
            >
              {result.badge}
            </span>
          </div>
          <p className="font-body-md text-body-md text-[#64748b] mt-0.5">
            {result.description}
          </p>
        </div>
      </div>

      {/* Reset button */}
      <button
        className="px-3.5 py-1.5 rounded-lg bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] font-label-sm text-label-sm font-semibold transition-colors border border-[#e2e8f0] shrink-0 cursor-pointer"
        onClick={onReset}
      >
        Nueva Consulta
      </button>
    </div>
  );
}
