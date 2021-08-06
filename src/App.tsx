import React from "react";
import "./App.css";
import { SummaryForm } from "./components/SummaryForm/SummaryForm";
import { OrderEntry } from "./pages/OrderEntry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  // orderPhase needs to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = React.useState("inProgress");

  return (
    <div className="App">
      <OrderDetailsProvider>
        <OrderEntry setOrderPhase={setOrderPhase} />
        <SummaryForm />
        {/* Confirmation page doesn't need a provider */}
      </OrderDetailsProvider>
    </div>
  );
}

export default App;
