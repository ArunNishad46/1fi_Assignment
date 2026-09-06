import { ChevronRight } from "lucide-react";

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function ProductCard({ product, onSelect }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-zinc-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h2 className="text-base font-bold text-zinc-900">
          {product.name}
        </h2>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-extrabold">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-zinc-400 line-through">
            {formatPrice(product.originalPrice)}
          </span>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-xs font-bold text-zinc-700">
            Variants
          </p>

          <div className="flex flex-wrap gap-1.5">
            {product.variants.map(
              (variant) => (
                <span
                  key={variant}
                  className="rounded-lg bg-zinc-100 px-2.5 py-1.5 text-[11px] font-medium text-zinc-600"
                >
                  {variant}
                </span>
              )
            )}
          </div>
        </div>

        <button
          onClick={() => onSelect(product)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-xs font-bold text-white transition hover:bg-violet-700 cursor-pointer"
        >
          View EMI options
          <ChevronRight size={15} />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;


