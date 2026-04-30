import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={twMerge("max-w-5xl mx-auto px-8", className)}>
      {children}
    </div>
  );
}
