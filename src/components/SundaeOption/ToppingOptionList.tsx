import { SundaeModel } from "../../utils/models";
import { ToppingOption } from "./ToppingOption";

interface ToppingOptionListProps {
  toppingOptions: SundaeModel[];
}

export function ToppingOptionList({ toppingOptions }: ToppingOptionListProps) {
  return (
    <div>
      {toppingOptions.map((item: SundaeModel) => {
        return (
          <ToppingOption
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
          />
        );
      })}
    </div>
  );
}
