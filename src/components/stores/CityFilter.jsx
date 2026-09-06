import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CITIES = ["Gurugram", "Noida", "Delhi", "All"];

function CityFilter({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const handleSelect = (city) => {
    onChange(city);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center gap-1 rounded-full border border-[#e5e5e5] bg-white px-7 py-1.5 text-[13px] font-semibold text-[#7144a5]"
      >
        {value}

        <ChevronDown
          size={12}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-0.5 min-w-27.5 overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-white py-1 shadow-lg">
          {CITIES.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => handleSelect(city)}
              className={`block w-full cursor-pointer px-3 py-2 text-left text-[12px] font-medium transition-colors hover:bg-[#f5f0fa] ${
                value === city
                  ? "bg-[#faf7fc] text-[#7144a5]"
                  : "text-[#444]"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CityFilter;