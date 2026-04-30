import { createContext, useContext, useState } from "react";

import { type Finance } from "@/features/finance/utils/types";

type FinanceContext = {
  finances: Finance[];
  addFinance: (formData: Omit<Finance, "id">) => void;
  balance: number;
};

const FinanceContext = createContext<FinanceContext | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function FinanceProvider({ children }: Props) {
  const [finances, setFinances] = useState<Finance[]>([]);

  const addFinance = (formData: Omit<Finance, "id">) => {
    setFinances((currentFinances) => [
      { ...formData, id: Date.now() },
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
