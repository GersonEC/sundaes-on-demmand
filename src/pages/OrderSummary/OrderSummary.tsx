import { SummaryForm } from "../../components/SummaryForm/SummaryForm";
import { SundaeSummary } from "../../components/SundaeSummary/SundaeSummary";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { SundaeOptionType } from "../../utils/enum";
import "./OrderSummary.css";

interface OrderSummaryProps {
  setOrderPhase: (status: string) => void;
}

export function OrderSummary({ setOrderPhase }: OrderSummaryProps) {
  const [orderDetails] = useOrderDetails();
  const scoops: [][] = Array.from(orderDetails.scoops);
  const toppings: [][] = Array.from(orderDetails.toppings);

  return (
    <div className="order-summary">
      <h1>Order Summary</h1>
      <h3>{orderDetails.scoops.values()}</h3>
      <SundaeSummary
        optionType={SundaeOptionType.SCOOPS}
        subtotal={orderDetails.totals.scoops}
        sundaes={scoops}
      />
      <SundaeSummary
        optionType={SundaeOptionType.TOPPINGS}
        subtotal={orderDetails.totals.toppings}
        sundaes={toppings}
      />
      <h2>Total: {orderDetails.totals.grandTotal}</h2>
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  );
}
