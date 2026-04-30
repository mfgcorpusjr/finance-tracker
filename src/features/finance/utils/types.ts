import { z } from "zod";

import { addFinanceSchema } from "@/features/finance/utils/schemas";

export type FinanceType = "Income" | "Expense";

export type Finance = {
  id: number;
  description: string;
  amount: number;
  type: FinanceType;
};

export type AddFinanceFormData = z.infer<typeof addFinanceSchema>;
