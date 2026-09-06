function ProductVariants({ variants, selected, onChange }) {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-bold">
        Product variants
      </h3>

      <div className="mt-2 flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant}
            onClick={() => onChange(variant)}
            className={`rounded-xl border px-3 py-2 text-xs font-semibold transition cursor-pointer ${
              selected === variant
                ? "border-violet-600 bg-violet-50 text-violet-700"
                : "border-zinc-200 bg-white text-zinc-600"
            }`}
          >
            {variant}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductVariants;



