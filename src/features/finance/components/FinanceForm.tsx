import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucidePlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import FormInput from "@/components/forms/FormInput";
import FormSelect from "@/components/forms/FormSelect";

import { financeTypes } from "@/features/finance/utils/data";

const formSchema = z.object({
  description: z.string().min(2, "Description must be at least 2 characters"),
  amount: z.coerce
    .number<number>({ error: "Amount is required" })
    .min(1, { error: "Amount must be at least 1" }),
  type: z.enum(financeTypes, { error: "Type is required" }),
});

type FormData = z.infer<typeof formSchema>;

export default function FinanceForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      amount: undefined,
      type: "Income",
    },
  });

  const handleAddFinance = (formData: FormData) => {
    console.log(formData);
  };

  return (
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
  );
}
