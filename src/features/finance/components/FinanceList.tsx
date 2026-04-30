import FinanceListItem from "@/features/finance/components/FinanceListItem";

import { useFinanceContext } from "@/features/finance/providers/FinanceProvider";

export default function FinanceList() {
  const { finances } = useFinanceContext();

  if (finances.length === 0) {
    return <p className="text-sm text-gray-500 text-center">No data found</p>;
  }

  return (
    <ul className="space-y-4">
      {finances.map((finance) => (
        <FinanceListItem key={finance.id} finance={finance} />
      ))}
    </ul>
  );
}
