import React from "react";
import "./App.css";
import { SummaryForm } from "./components/SummaryForm/SummaryForm";
import { SundaeOptionsContainer } from "./containers/SundaeOptionsContainer/SundaeOptionsContainer";
import { SundaeOptionType } from "./utils/enum";

function App() {
  return (
    <div className="App">
      <SummaryForm />
      <SundaeOptionsContainer optionType={SundaeOptionType.SCOOPS} />
      <SundaeOptionsContainer optionType={SundaeOptionType.TOPPINGS} />
    </div>
  );
}

export default App;
