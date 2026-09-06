import { useState } from "react";
import { X } from "lucide-react";
import ProductVariants from "./ProductVariants";
import EmiPlans from "./EMIPlans";

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function ProductDetails({ product, onClose }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedEmi, setSelectedEmi] = useState(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-3">
      <div className="flex max-h-[90vh] w-full max-w-97.5 flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-zinc-100 bg-white px-4 py-3">
          <h2 className="text-[14px] font-bold text-zinc-800">
            Product Details
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 cursor-pointer"
          >
            <X size={17} />
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-2xl bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="aspect-square w-full object-contain"
              />
            </div>
          </div>

          <div className="px-4 py-4">
            <h1 className="text-[18px] font-extrabold leading-6 text-zinc-900">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[21px] font-extrabold text-zinc-900">
                {formatPrice(product.price)}
              </span>

              {product.originalPrice && (
                <span className="text-[12px] text-zinc-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <div className="mt-5">
              <ProductVariants
                variants={product.variants}
                selected={selectedVariant}
                onChange={setSelectedVariant}
              />
            </div>

            <div className="mt-5 border-t border-zinc-100 pt-4">
              <h3 className="text-[14px] font-bold text-zinc-900">
                Product details
              </h3>
              <ul className="mt-2 space-y-2">
                {product.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-[11px] leading-4 text-zinc-500"
                  >
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-zinc-100 pt-4">
              <EmiPlans
                plans={product.emiPlans}
                selected={selectedEmi}
                onChange={setSelectedEmi}
              />
            </div>

            <button
              disabled={!selectedEmi}
              className="mt-5 mb-2 w-full rounded-xl bg-violet-600 py-3.5 text-[13px] font-bold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
              {selectedEmi
                ? `Selected: ${selectedEmi.months}-month EMI`
                : "Select an EMI plan"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;



