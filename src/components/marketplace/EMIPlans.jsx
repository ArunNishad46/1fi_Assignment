function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function EmiPlans({ plans, selected, onChange }) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold">
          EMI options / plans
        </h3>
        <span className="text-[10px] font-semibold text-emerald-600">
          No-cost EMI
        </span>
      </div>
      <div className="mt-2 space-y-2">
        {plans.map((plan) => {
          const isSelected = selected?.id === plan.id;

          return (
            <button
              key={plan.id}
              onClick={() => onChange(plan)}
              className={`flex w-full items-center justify-between rounded-2xl border p-3 text-left transition cursor-pointer ${
                isSelected
                  ? "border-violet-600 bg-violet-50"
                  : "border-zinc-200 bg-white hover:border-violet-300"
              }`}
            >
              <div>
                <p className="text-sm font-bold">
                  {plan.months} months
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-500">
                  EMI plan
                </p>
              </div>
              <p className="text-sm font-extrabold text-zinc-900">
                {formatPrice(plan.amount)}
                <span className="font-medium text-zinc-400">
                  {" "}
                  / month
                </span>
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default EmiPlans;




