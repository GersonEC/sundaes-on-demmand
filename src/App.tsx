import React from "react";
import "./App.css";
import { OrderEntry } from "./pages/OrderEntry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import { OrderSummary } from "./pages/OrderSummary/OrderSummary";
import { OrderConfirmation } from "./pages/OrderConfirmation/OrderConfirmation";

function App() {
  // orderPhase needs to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = React.useState("inProgress");

  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
      break;
    case "completed":
      Component = OrderConfirmation;
      break;
    default:
  }

  return (
    <div className="App">
      <OrderDetailsProvider>
        {<Component setOrderPhase={setOrderPhase} />}
        {/*<OrderEntry setOrderPhase={setOrderPhase} />
        <OrderSummary setOrderPhase={setOrderPhase} />*/}
        {/* Confirmation page doesn't need a provider */}
      </OrderDetailsProvider>
    </div>
  );
}

export default App;
