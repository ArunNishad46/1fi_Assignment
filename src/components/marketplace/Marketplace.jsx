import { useState } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import { PRODUCTS } from "../../data/products";

function Marketplace({ search }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = PRODUCTS.filter(
    (product) => product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mt-6">
      <div className="mb-5">
        <h1 className="text-xl font-extrabold sm:text-2xl">
          1Fi Marketplace
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Products available with EMI options
        </p>
      </div>

      <ProductList
        products={filteredProducts}
        onSelect={setSelectedProduct}
      />

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() =>
            setSelectedProduct(null)
          }
        />
      )}
    </section>
  );
}

export default Marketplace;


