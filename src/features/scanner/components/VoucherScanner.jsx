import { useRef } from "react";

export default function VoucherScanner({ onScan, isScanning }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      onScan("doc", file.name);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      onScan("doc", file.name);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col space-y-4">
      <div
        className="relative border-2 border-dashed border-[#cbd5e1] hover:border-[#10b981] bg-[#f8fafc] hover:bg-[#f0fdf4]/30 rounded-xl p-8 sm:p-12 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 group"
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          ref={fileInputRef}
          accept="image/png, image/jpeg, image/webp, application/pdf"
          className="hidden"
          type="file"
          onChange={handleFileChange}
        />
        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#10b981] group-hover:scale-105 transition-transform mb-3 border border-[#e2e8f0]">
          <span className="material-symbols-outlined text-[32px]">
            document_scanner
          </span>
        </div>
        <p className="font-headline-sm text-headline-sm text-[#0f172a] font-semibold">
          Arrastrá la captura del comprobante bancario o billetera virtual aquí
        </p>
        <p className="font-body-md text-body-md text-[#64748b] mt-1">
          o hacé clic para explorar desde tu dispositivo (PNG, JPG, WebP o PDF
          hasta 15MB)
        </p>
        <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[#475569] font-label-sm text-label-sm border border-[#e2e8f0] shadow-2xs">
          <span className="material-symbols-outlined text-[16px] text-[#10b981]">
            csv
          </span>
          <span>
            Inspección forense de tipografía, sombras de compresión y metadatos
            EXIF
          </span>
        </div>
      </div>
    </div>
  );
}
