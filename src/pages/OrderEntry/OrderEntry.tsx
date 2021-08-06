import { SundaeOptionsContainer } from "../../containers/SundaeOptionsContainer/SundaeOptionsContainer";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { SundaeOptionType } from "../../utils/enum";

interface OrderEntryProps {
  setOrderPhase: (status: string) => void;
}
export function OrderEntry({ setOrderPhase }: OrderEntryProps) {
  const [orderDetails] = useOrderDetails();
  // disable order button if there aren't any scoops in order
  const orderDisabled = orderDetails.totals.scoops === "$0.00";

  return (
    <div className="order-entry">
      <h1>Design your Sundae!</h1>
      <SundaeOptionsContainer optionType={SundaeOptionType.SCOOPS} />
      <SundaeOptionsContainer optionType={SundaeOptionType.TOPPINGS} />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <button disabled={orderDisabled} onClick={() => setOrderPhase("review")}>
        Order Sundae!
      </button>
    </div>
  );
}
