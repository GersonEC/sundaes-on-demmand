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
  return (
    <div>
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
