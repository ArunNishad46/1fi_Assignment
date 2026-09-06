import StoreCard from "./StoreCard";

function StoreList({ stores }) {
  if (!stores.length) {
    return (
      <div className="rounded-[14px] bg-white p-8 text-center text-sm text-gray-400">
        No stores found.
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      {stores.map((store) => (
        <StoreCard
          key={store.id}
          store={store}
        />
      ))}
    </div>
  );
}

export default StoreList;

