import { SundaeOptionType } from "../../utils/enum";
import { InputNumber } from "antd";
import "antd/dist/antd.css";
import "./style/SundaeOption.css";
import { useState } from "react";

interface SundaeOptionProps {
  name: string;
  imagePath: string;
  optionType: SundaeOptionType;
  updateItemCount: (itemName: string, newItemCount: number) => void;
}

export function SundaeOption({
  name,
  imagePath,
  optionType,
  updateItemCount,
}: SundaeOptionProps) {
  const [isValid, setIsValid] = useState(true);
  const handleChange = (event: any) => {
    debugger;
    const currentValue = event;

    // make sure we're using a number and not a string to validate
    const currentValueFloat = parseFloat(currentValue);
    const valueIsValid =
      0 <= currentValueFloat &&
      currentValueFloat <= 10 &&
      Math.floor(currentValueFloat) === currentValueFloat;

    // validate
    setIsValid(valueIsValid);

    // only update context if the value is valid
    if (valueIsValid) updateItemCount(name, currentValue);
  };

  return (
    <div className="sundae-option">
      <div>
        <img
          src={`http://localhost:3030/${imagePath}`}
          alt={`${name} ${
            optionType === SundaeOptionType.SCOOPS ? "scoop" : "topping"
          }`}
          title={`${name} ${
            optionType === SundaeOptionType.SCOOPS ? "scoop" : "topping"
          }`}
        />
      </div>

      <div className="sundae-option_input">
        <form>
          <label htmlFor="sundae-quantity">{name ? name : ""}</label>
          <InputNumber
            id="sundae-quantity"
            min={0}
            defaultValue={0}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}
