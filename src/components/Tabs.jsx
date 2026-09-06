function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex h-10.5 w-full items-center rounded-full border border-[#e8e1ef] bg-gray-50 p-1 shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative flex h-full flex-1 items-center justify-center rounded-full text-[13px] font-semibold transition-all cursor-pointer ${
            activeTab === tab
              ? "bg-white text-[#7144a5] shadow-sm"
              : "text-[#777777]"
          }`}
        >
          {tab}

          {activeTab === tab && (
            <span className="absolute bottom-0.5 left-1/2 h-0.5 w-6.25 -translate-x-1/2 rounded-full bg-[#7144a5]" />
          )}
        </button>
      ))}
    </div>
  );
}

export default Tabs;