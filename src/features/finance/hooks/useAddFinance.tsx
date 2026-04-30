import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useFinanceContext } from "@/features/finance/providers/FinanceProvider";
import {
  type AddFinanceFormData,
  addFinanceSchema,
} from "@/features/finance/utils/schemas";

const useAddFinance = () => {
  const { addFinance } = useFinanceContext();

  const form = useForm<AddFinanceFormData>({
    resolver: zodResolver(addFinanceSchema),
    defaultValues: {
      description: "",
      amount: undefined,
      type: "Income",
    },
  });

  return {
    addFinance,
    form,
  };
};

export default useAddFinance;
