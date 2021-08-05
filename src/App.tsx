import React from "react";
import "./App.css";
import { SummaryForm } from "./components/SummaryForm/SummaryForm";
import { OrderEntry } from "./pages/OrderEntry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  return (
    <div className="App">
      <OrderDetailsProvider>
        <SummaryForm />
        <OrderEntry />
        {/* Confirmation page doesn't need a provider */}
      </OrderDetailsProvider>
    </div>
  );
}

export default App;
