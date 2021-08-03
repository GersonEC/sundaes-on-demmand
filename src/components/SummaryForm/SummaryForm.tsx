import { useState } from "react";
import { Button } from "../Button/Button";

export function SummaryForm() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <input
        id="termsCheckbox"
        type="checkbox"
        checked={checked}
        aria-checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="termsCheckbox">I agree to Terms and Conditions</label>
      <Button text="Confirm order" isDisabled={checked} />
    </div>
  );
}
