import { createContext, useContext, useState, useEffect } from "react";

import type { Finance } from "@/features/finance/utils/types";

type addFinancePayload = Omit<Finance, "id" | "date">;

type FinanceContext = {
  finances: Finance[];
  addFinance: (formData: addFinancePayload) => void;
  balance: number;
};

const FinanceContext = createContext<FinanceContext | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function FinanceProvider({ children }: Props) {
  const [finances, setFinances] = useState<Finance[]>(() => {
    const storedFinances = localStorage.getItem("finances");
    return storedFinances ? JSON.parse(storedFinances) : [];
  });

  useEffect(() => {
    localStorage.setItem("finances", JSON.stringify(finances));
  }, [finances]);

  const addFinance = (formData: addFinancePayload) => {
    setFinances((currentFinances) => [
      {
        ...formData,
        id: Date.now(),
        date: new Date(),
      },
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
