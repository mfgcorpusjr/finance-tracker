import Container from "@/components/Container";
import Balance from "@/features/finance/components/Balance";
import FinanceForm from "@/features/finance/components/FinanceForm";

export default function App() {
  return (
    <Container className="py-16 space-y-8">
      <Balance amount={0} />

      <FinanceForm />
    </Container>
  );
}
