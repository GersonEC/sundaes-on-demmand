import { useState } from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  isDisabled?: boolean;
}

export function Button({ isDisabled, text }: ButtonProps) {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: isDisabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  );
}
