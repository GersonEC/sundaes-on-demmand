import { pricePerItem } from "../../utils/constants";
import { SundaeOptionType } from "../../utils/enum";
import { SundaeModel } from "../../utils/models";
import { SundaeOption } from "./SundaeOption";

interface SundaeOptionListProps {
  sundaeOptions: SundaeModel[];
  optionType: SundaeOptionType;
}

export function SundaeOptionList({
  sundaeOptions,
  optionType,
}: SundaeOptionListProps) {
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
  return (
    <div>
      <h2>{title}</h2>
      <p>{pricePerItem[optionType]} each</p>
      {sundaeOptions.map((item) => {
        return (
          <SundaeOption
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
            optionType={optionType}
          />
        );
      })}
    </div>
  );
}
