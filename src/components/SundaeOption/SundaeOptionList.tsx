import { useOrderDetails } from "../../contexts/OrderDetails";
import { pricePerItem } from "../../utils/constants";
import { SundaeOptionType } from "../../utils/enum";
import { SundaeModel } from "../../utils/models";
import { SundaeOption } from "./SundaeOption";
import "./style/SundaeOptionList.css";
import { formatCurrency } from "../../utils/utilities";

interface SundaeOptionListProps {
  sundaeOptions: SundaeModel[];
  optionType: SundaeOptionType;
}

export function SundaeOptionList({
  sundaeOptions,
  optionType,
}: SundaeOptionListProps) {
  const [orderDetails, updateItemCount] = useOrderDetails();
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  return (
    <div className="sundae-option-list">
      <div className="sundae-option-list_info">
        <h2>{title}</h2>
        <p>{formatCurrency(pricePerItem[optionType])} each</p>
        <p>
          {title} total: {orderDetails.totals[optionType]}
        </p>
      </div>
      <div className="sundae-option-list_items">
        {sundaeOptions.map((item) => {
          return (
            <SundaeOption
              key={item.name}
              name={item.name}
              imagePath={item.imagePath}
              optionType={optionType}
              updateItemCount={(itemName, newItemCount) =>
                updateItemCount(itemName, newItemCount, optionType)
              }
            />
          );
        })}
      </div>
    </div>
  );
}
