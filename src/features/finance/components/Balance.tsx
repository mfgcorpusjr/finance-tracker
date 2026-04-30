import clsx from "clsx";

type Props = {
  amount: number;
};

export default function Balance({ amount }: Props) {
  return (
    <h3
      className={clsx("text-5xl text-black font-black", {
        "text-green-700": amount > 0,
        "text-red-700": amount < 0,
      })}
    >
      {amount > 0 && "+"}
      {amount}
    </h3>
  );
}
