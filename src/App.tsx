import React from "react";
import "./App.css";
import { SummaryForm } from "./components/SummaryForm/SummaryForm";
import { SundaeOptions } from "./containers/SundaeOptions/SundaeOptions";

function App() {
  return (
    <div className="App">
      <SummaryForm />
      <SundaeOptions optionType="scoops" />
      <SundaeOptions optionType="toppings" />
    </div>
  );
}

export default App;
