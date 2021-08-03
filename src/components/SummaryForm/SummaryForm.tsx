import { useState } from "react";
import { Button } from "../Button/Button";

export function SummaryForm() {
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
