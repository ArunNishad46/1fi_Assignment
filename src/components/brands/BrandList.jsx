import BrandCard from "./BrandCard";

function BrandList({ brands }) {
  if (!brands.length) {
    return (
      <div className="rounded-[14px] bg-white p-8 text-center text-sm text-gray-400">
        No brands found.
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      {brands.map((brand) => (
        <BrandCard
          key={brand.id}
          brand={brand}
        />
      ))}
    </div>
  );
}

export default BrandList;

