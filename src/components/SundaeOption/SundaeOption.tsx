import { SundaeOptionType } from "../../utils/enum";
import { InputNumber } from "antd";
import "./style/SundaeOption.css";

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
  const onFinish = () => {};

  const onFinishFailed = () => {};

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
        {name ? name : ""}
        <InputNumber />
      </div>
    </div>
  );
}
