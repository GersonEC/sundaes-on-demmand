import axios from "axios";
import { useEffect, useState } from "react";
import { SundaeOptionList } from "../../components/SundaeOption/SundaeOptionList";
import { SundaeOptionType } from "../../utils/enum";
import { SundaeModel } from "../../utils/models";

interface SundaeOptionsProps {
  optionType: SundaeOptionType;
}

export function SundaeOptionsContainer({ optionType }: SundaeOptionsProps) {
  const [items, setItems] = useState<SundaeModel[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        //TODO: handle error response
      });
  }, [optionType]);

  return (
    <div>
      <SundaeOptionList sundaeOptions={items} optionType={optionType} />
    </div>
  );
}
