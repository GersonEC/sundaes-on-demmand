import React from "react";
import "./App.css";
import { SummaryForm } from "./components/SummaryForm/SummaryForm";
import { OrderEntry } from "./pages/OrderEntry/OrderEntry";

function App() {
  return (
    <div className="App">
      <SummaryForm />
      <OrderEntry />
    </div>
  );
}

export default App;
