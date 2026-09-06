import { ChevronRight } from "lucide-react";

function BrandCard({ brand }) {
  return (
    <button className="flex w-full items-center gap-3 rounded-[14px] border border-[#e9e9e9] bg-white p-2.5 text-left shadow-[0_1px_4px_rgba(0,0,0,0.03)] cursor-pointer">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[11px] border border-[#eeeeee] bg-white p-1.5">
        <img
          src={brand.image}
          alt={brand.name}
          className="h-full w-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[15px] font-bold text-[#252525]">
          {brand.name}
        </h3>
        <p className="mt-1 text-[12px] text-[#999]">
          {brand.emi}
        </p>
      </div>

      <ChevronRight
        size={18}
        className="shrink-0 text-[#bdbdbd]"
      />
    </button>
  );
}

export default BrandCard;

