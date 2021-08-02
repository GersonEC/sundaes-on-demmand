import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <label htmlFor="checkbox"> Disable the button </label>
      <input
        type="checkbox"
        checked={checked}
        name="checkbox"
        aria-checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <Button isDisabled={checked} />
    </div>
  );
}

export default App;
