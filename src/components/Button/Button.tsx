import { useState } from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  isDisabled?: boolean;
  onClick?: void;
}

export function Button({ isDisabled, text, onClick }: ButtonProps) {
  const [buttonColor, setButtonColor] = useState("red");

  return (
    <div>
      <button
        style={{ backgroundColor: isDisabled ? "gray" : buttonColor }}
        onClick={() => onClick}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  );
}
