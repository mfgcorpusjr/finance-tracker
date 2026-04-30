export type FinanceType = "Income" | "Expense";

export type Finance = {
  id: number;
  description: string;
  amount: number;
  type: FinanceType;
  date: Date;
};
