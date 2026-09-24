export default function ScanProgress({ progress, statusLabel }) {
  return (
    <div className="mt-4 p-4 rounded-xl bg-[#f8fafc] border border-[#10b981]/40 flex flex-col space-y-3 shadow-xs transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-label-md text-label-md text-[#006c49] font-semibold">
          <span className="material-symbols-outlined animate-spin text-[18px] text-[#10b981]">
            progress_activity
          </span>
          <span>{statusLabel}</span>
        </div>
        <span className="font-label-md text-label-md text-[#64748b] font-bold">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-[#e2e8f0] rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#10b981] to-[#00b2d0] h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
