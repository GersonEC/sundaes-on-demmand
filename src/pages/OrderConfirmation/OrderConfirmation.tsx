import { Button } from "../../components/Button/Button";

interface OrderConfirmationProps {
  setOrderPhase: (status: string) => void;
}

export function OrderConfirmation({ setOrderPhase }: OrderConfirmationProps) {
  return (
    <div>
      <h1>Thank you</h1>
      <h3>Your order number is 1235378</h3>
      <h4>as per our terms and conditions nothing will happen now.</h4>
      {/*<Button text="Create new order" onClick={setOrderPhase} />*/}
      <button onClick={() => setOrderPhase("inProgress")}>Order Sundae!</button>
    </div>
  );
}
