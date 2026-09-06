import { Search } from "lucide-react";

function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="relative">
      <Search
        size={18}
        strokeWidth={1.8}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a5a5a5]"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-9.5 w-full rounded-full border border-[#e9e9e9] bg-white pl-10 pr-4 text-[15px] text-[#333] outline-none placeholder:text-[#b0b0b0] focus:border-[#b48bd2]"
      />
    </div>
  );
}

export default SearchBar;

