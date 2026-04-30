import { z } from "zod";

import { financeTypes } from "@/features/finance/utils/data";

export const addFinanceSchema = z.object({
  description: z
    .string()
    .trim()
    .min(2, "Description must be at least 2 characters"),
  amount: z.coerce
    .number<number>({ error: "Amount is required" })
    .min(1, { error: "Amount must be at least 1" }),
  type: z.enum(financeTypes, { error: "Type is required" }),
});

export type AddFinanceFormData = z.infer<typeof addFinanceSchema>;
