import { useState } from "react";
import { Button } from "../Button/Button";
import { Popover } from "antd";
import "antd/dist/antd.css";

export function SummaryForm() {
  const [checked, setChecked] = useState(false);

  const content = <p>No ice cream will actually be delivered</p>;

  return (
    <div className="App">
      <input
        id="termsCheckbox"
        type="checkbox"
        checked={checked}
        aria-checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="termsCheckbox">
        I agree to{" "}
        <Popover content={content}>
          <span data-testid="terms" style={{ color: "blue" }}>
            Terms and Conditions
          </span>
        </Popover>
      </label>
      <Button text="Confirm order" isDisabled={checked} />
    </div>
  );
}
