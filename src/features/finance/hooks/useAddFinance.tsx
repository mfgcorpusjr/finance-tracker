import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useFinanceContext } from "@/features/finance/providers/FinanceProvider";
import { type AddFinanceFormData } from "@/features/finance/utils/types";
import { addFinanceSchema } from "@/features/finance/utils/schemas";

const useAddFinance = () => {
  const { addFinance: submit } = useFinanceContext();

  const form = useForm<AddFinanceFormData>({
    resolver: zodResolver(addFinanceSchema),
    defaultValues: {
      description: "",
      amount: undefined,
      type: "Income",
    },
  });

  return {
    submit,
    form,
  };
};

export default useAddFinance;
