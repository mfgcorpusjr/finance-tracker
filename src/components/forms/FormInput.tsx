import { type ComponentProps } from "react";

import {
  Controller,
  type FieldValues,
  type Path,
  type Control,
} from "react-hook-form";

import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
} & ComponentProps<typeof Input>;

export default function FormInput<T extends FieldValues>({
  name,
  control,
  label,
  ...rest
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}

          <Input
            {...rest}
            {...field}
            id={name}
            aria-invalid={fieldState.invalid}
            value={field.value ?? ""}
          />

          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} className="-mt-1 text-xs" />
          )}
        </Field>
      )}
    />
  );
}
