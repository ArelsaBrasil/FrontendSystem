import { TableContainer, TableRenderContainer } from "./styles";

import { BasicTable } from "../BasicTable";
import { IItemsReturnSearchAndFilter } from "../../layouts/luzes/SearchScreen/type";

interface ITableOfSearchScreenProps {
  isLoading: boolean;
  waitingTheSearch: boolean;
  itemsReturned?: IItemsReturnSearchAndFilter[];
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
