import Container from "@/components/Container";
import Balance from "@/features/finance/components/Balance";
import FinanceForm from "@/features/finance/components/FinanceForm";
import FinanceList from "@/features/finance/components/FinanceList";

export default function App() {
  return (
    <Container className="py-16 space-y-8">
      <Balance />

      <FinanceForm />

      <FinanceList />
    </Container>
  );
}
