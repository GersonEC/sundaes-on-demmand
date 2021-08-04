import axios from "axios";
import { useEffect, useState } from "react";
import { AlertBanner } from "../../components/AlertBanner.tsx/AlertBanner";
import { SundaeOptionList } from "../../components/SundaeOption/SundaeOptionList";
import { SundaeOptionType } from "../../utils/enum";
import { SundaeModel } from "../../utils/models";

interface SundaeOptionsProps {
  optionType: SundaeOptionType;
}

export function SundaeOptionsContainer({ optionType }: SundaeOptionsProps) {
  const [items, setItems] = useState<SundaeModel[]>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        setError(true);
      });
  }, [optionType]);

  return (
    <div className="sundae-options-container">
      <SundaeOptionList sundaeOptions={items} optionType={optionType} />
      {error && <AlertBanner />}
    </div>
  );
}
