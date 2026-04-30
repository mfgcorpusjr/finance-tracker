import { createContext, useContext, useState } from "react";

import { type Finance } from "@/features/finance/utils/types";

type FinanceContext = {
  finances: Finance[];
  balance: 0;
};

const FinanceContext = createContext<FinanceContext | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function FinanceProvider({ children }: Props) {
  const [finances, setFinances] = useState<Finance[]>([]);

  const balance = 0;

  return (
    <FinanceContext.Provider value={{ finances, balance }}>
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
