import { TableContainer, TableRenderContainer } from "./styles";

import { ItemsReturnSearchAndFilter } from "../../layouts/luzes/SearchScreen";
import { BasicTable } from "../BasicTable";
import { BallTriangle, Oval } from "react-loader-spinner";

interface ITableOfSearchScreenProps {
  isLoading: boolean;
  waitingTheSearch: boolean;
  itemsReturned?: ItemsReturnSearchAndFilter[];
}

export function TableOfSearchScreen({
  isLoading,
  waitingTheSearch,
  itemsReturned,
}: ITableOfSearchScreenProps) {
  return (
    <TableContainer>
      <TableRenderContainer>
        <BasicTable
          isLoading={isLoading}
          itemsReturned={itemsReturned}
          waitingTheSearch={waitingTheSearch}
        />
      </TableRenderContainer>
    </TableContainer>
  );
}
