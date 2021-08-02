import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      Disable the button
      <Button isDisabled={checked} />
    </div>
  );
}

export default App;
