import clsx from "clsx";

import { useFinanceContext } from "@/features/finance/providers/FinanceProvider";
import { formatCurrency } from "@/features/finance/utils/helpers";

export default function Balance() {
  const { balance } = useFinanceContext();

  return (
    <h3
      className={clsx("text-5xl text-black font-black", {
        "text-green-700": balance > 0,
        "text-red-700": balance < 0,
      })}
    >
      {`${balance > 0 ? "+" : ""}${formatCurrency(balance)}`}
    </h3>
  );
}
