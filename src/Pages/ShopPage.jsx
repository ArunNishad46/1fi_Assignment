import { useMemo, useState } from "react";
import Tabs from "../components/Tabs";
import SearchBar from "../components/SearchBar";
import BrandList from "../components/brands/BrandList";
import StoreList from "../components/stores/StoreList";
import Marketplace from "../components/marketplace/Marketplace";
import { BRANDS } from "../data/brands";
import { STORES } from "../data/stores";
import CityFilter from "../components/stores/CityFilter";

const TABS = [
  "Top Brands",
  "Nearby Stores",
  "Marketplace",
];

function ShopPage() {
  const [activeTab, setActiveTab] = useState("Top Brands");
  const [selectedCity, setSelectedCity] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBrands = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return BRANDS;

    return BRANDS.filter((brand) =>
      brand.name.toLowerCase().includes(query)
    );
  }, [search]);

  const filteredStores = useMemo(() => {
    const query = search.toLowerCase().trim();
  
    return STORES.filter((store) => {
      const matchesCity =
        selectedCity === "All" || store.city === selectedCity;
  
      const matchesSearch =
        !query ||
        store.name.toLowerCase().includes(query) ||
        store.address.toLowerCase().includes(query);
  
      return matchesCity && matchesSearch;
    });
  }, [search, selectedCity]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <div className="mx-auto min-h-screen w-full max-w-97.5 bg-[#f7f7f7]">
        <div className="px-4 pt-4">
          <Tabs
            tabs={TABS}
            activeTab={activeTab}
            onChange={handleTabChange}
          />
        </div>

        <main className="px-4 pb-10">
          <div className="mt-4">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder={
                activeTab === "Nearby Stores"
                  ? "Search stores..."
                  : activeTab === "Marketplace"
                  ? "Search products..."
                  : "Search online stores..."
              }
            />
          </div>

          {activeTab === "Top Brands" && (
            <section className="mt-4">
              <div className="mb-3">
                <h1 className="text-[16px] font-bold text-[#202124]">
                  Top Brands
                </h1>
              </div>

              <BrandList brands={filteredBrands} />
            </section>
          )}

          {activeTab === "Nearby Stores" && (
            <section className="mt-4">
              <div className="mb-3 flex items-center justify-between">
                <h1 className="text-[16px] font-bold text-[#202124]">
                  Nearby Stores
                </h1>

                <CityFilter
                  value={selectedCity}
                  onChange={setSelectedCity}
                />
              </div>
              <StoreList stores={filteredStores} />
            </section>
          )}

          {activeTab === "Marketplace" && (
            <Marketplace search={search} />
          )}
        </main>
      </div>
    </div>
  );
}

export default ShopPage;

