import ProductCard from "./ProductCard";

function ProductList({ products, onSelect }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-10 text-center">
        <h3 className="font-bold">
          No products found
        </h3>
        <p className="mt-1 text-sm text-zinc-500">
          Try searching for another product.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-3 grid-cols-2">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default ProductList;


