import { format } from "date-fns";
import clsx from "clsx";

import { Card, CardContent } from "@/components/ui/card";

import { type Finance } from "@/features/finance/utils/types";

type Props = {
  finance: Finance;
};

export default function FinanceListItem({ finance }: Props) {
  return (
    <Card>
      <CardContent className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="space-y-2 text-center sm:text-left">
          <p className="font-semibold">{finance.description}</p>

          <p className="text-xs text-gray-500">
            {format(finance.date, "EEE MMM d, yyyy")}
          </p>
        </div>

        <p
          className={clsx("text-xl font-bold", {
            "text-green-700": finance.type === "Income",
            "text-red-700": finance.type === "Expense",
          })}
        >
          {finance.type === "Income" && "+"}
          {finance.amount.toFixed(2)}
        </p>
      </CardContent>
    </Card>
  );
}
