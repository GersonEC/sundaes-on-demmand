import { useState } from "react";
import "./Button.css";

interface ButtonProps {
  isDisabled?: boolean;
}

export function Button({ isDisabled }: ButtonProps) {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: isDisabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}
