import { ChevronRight, MapPin } from "lucide-react";

function StoreCard({ store }) {
  return (
    <button className="flex w-full items-center gap-3 rounded-[14px] border border-[#e9e9e9] bg-white p-2.5 text-left shadow-[0_1px_4px_rgba(0,0,0,0.03)] cursor-pointer">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[11px] border border-[#eeeeee] bg-white p-1.5">
        <img
          src={store.image}
          alt={store.name}
          className="h-full w-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-[13px] font-bold text-[#272727]">
            {store.name}
          </h3>
          <span className="shrink-0 rounded-full bg-[#f4f4f4] px-2 py-1 text-[12px] font-bold text-[#777]">
            {store.distance}
          </span>
        </div>

        <div className="mt-1 flex gap-1 text-[12px] leading-3.25 text-[#888]">
          <MapPin
            size={11}
            className="mt-px shrink-0"
          />

          <span className="line-clamp-2">
            {store.address}
          </span>
        </div>
      </div>

      <ChevronRight
        size={18}
        className="shrink-0 text-[#bdbdbd]"
      />
    </button>
  );
}

export default StoreCard;


