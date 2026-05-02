import { LucidePlus } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/forms/FormInput";
import FormSelect from "@/components/forms/FormSelect";

import useAddFinance from "@/features/finance/hooks/useAddFinance";
import { type AddFinanceFormData } from "@/features/finance/utils/schemas";
import { type FinanceType } from "@/features/finance/utils/types";
import { financeTypes } from "@/features/finance/utils/data";

export default function FinanceForm() {
  const { form, addFinance } = useAddFinance();

  const handleAddFinance = (formData: AddFinanceFormData) => {
    const type = formData.type as FinanceType;

    addFinance({
      description: formData.description,
      amount: type === "Income" ? formData.amount : -formData.amount,
      type,
    });

    form.reset();
  };

  return (
    <Card>
      <CardContent>
        <form
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          onSubmit={form.handleSubmit(handleAddFinance)}
        >
          <FormInput
            name="description"
            control={form.control}
            placeholder="Description"
          />

          <FormInput
            type="number"
            name="amount"
            control={form.control}
            placeholder="Amount"
          />

          <FormSelect
            name="type"
            control={form.control}
            placeholder="Type"
            items={financeTypes.map((type) => ({ value: type, text: type }))}
          />

          <Button>
            <LucidePlus /> Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
