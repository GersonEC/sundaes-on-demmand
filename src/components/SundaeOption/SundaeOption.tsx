import { SundaeOptionType } from "../../utils/enum";

interface SundaeOptionProps {
  name: string;
  imagePath: string;
  optionType: SundaeOptionType;
}

export function SundaeOption({
  name,
  imagePath,
  optionType,
}: SundaeOptionProps) {
  return (
    <div>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} ${
          optionType === SundaeOptionType.SCOOPS ? "scoop" : "topping"
        }`}
        title={`${name} ${
          optionType === SundaeOptionType.TOPPINGS ? "scoop" : "topping"
        }`}
      />
    </div>
  );
}
