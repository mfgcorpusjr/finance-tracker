import { createContext, useContext, useState } from "react";

import type { Finance, FinanceType } from "@/features/finance/utils/types";
import { type AddFinanceFormData } from "@/features/finance/utils/schemas";

type FinanceContext = {
  finances: Finance[];
  addFinance: (formData: AddFinanceFormData) => void;
  balance: number;
};

const FinanceContext = createContext<FinanceContext | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function FinanceProvider({ children }: Props) {
  const [finances, setFinances] = useState<Finance[]>([]);

  const addFinance = (formData: AddFinanceFormData) => {
    setFinances((currentFinances) => [
      { ...formData, type: formData.type as FinanceType, id: Date.now() },
      ...currentFinances,
    ]);
  };

  const balance = finances.reduce((acc, item) => acc + item.amount, 0);

  return (
    <FinanceContext.Provider value={{ finances, addFinance, balance }}>
      {children}
    </FinanceContext.Provider>
  );
}

export const useFinanceContext = () => {
  const context = useContext(FinanceContext);

  if (!context) {
    throw new Error("useFinanceContext must be used within FinanceProvider");
  }

  return context;
};
