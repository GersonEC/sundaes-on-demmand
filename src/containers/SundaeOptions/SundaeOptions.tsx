import axios from "axios";
import { useEffect, useState } from "react";
import { ScoopOptionList } from "../../components/SundaeOption/ScoopOptionList";
import { SundaeModel } from "../../utils/models";

interface SundaeOptionsProps {
  optionType: string;
}

export function SundaeOptions({ optionType }: SundaeOptionsProps) {
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
      <ScoopOptionList scoopOptions={items} />
    </div>
  );
}
