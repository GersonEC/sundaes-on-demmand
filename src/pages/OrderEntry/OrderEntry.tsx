import { SundaeOptionsContainer } from "../../containers/SundaeOptionsContainer/SundaeOptionsContainer";
import { SundaeOptionType } from "../../utils/enum";

export function OrderEntry() {
  return (
    <div className="order-entry">
      <SundaeOptionsContainer optionType={SundaeOptionType.SCOOPS} />
      <SundaeOptionsContainer optionType={SundaeOptionType.TOPPINGS} />
    </div>
  );
}
