import { SundaeOptionType } from "../../utils/enum";

interface SundaeSummaryProps {
  optionType: SundaeOptionType;
  subtotal: string;
  sundaes: [][];
}

export function SundaeSummary({
  optionType,
  subtotal,
  sundaes,
}: SundaeSummaryProps) {
  return (
    <div>
      <h2>
        {optionType.toUpperCase()}: {subtotal}
      </h2>
      <ul>
        {sundaes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
