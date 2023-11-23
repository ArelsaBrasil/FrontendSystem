import { useState } from "react";
import { ButtonToSort } from "./styles";
import { CaretDown, CaretUp } from "phosphor-react";

export function SortButton({ children }: { children: string }) {
  let [sort, setSort] = useState<boolean>(true);

  return (
    <ButtonToSort
      onClick={() => {
        setSort(!sort);
      }}
    >
      <p>{children}</p>
      {sort ? <CaretUp size={18} /> : <CaretDown size={18} />}
    </ButtonToSort>
  );
}
