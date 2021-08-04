import { SundaeModel } from "../../utils/models";
import { ScoopOption } from "./ScoopOption";

interface ScoopOptionListProps {
  scoopOptions: SundaeModel[];
}

export function ScoopOptionList({ scoopOptions }: ScoopOptionListProps) {
  return (
    <div>
      {scoopOptions.map((item) => {
        return (
          <ScoopOption
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
          />
        );
      })}
    </div>
  );
}
