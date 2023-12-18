import { SelectChangeEvent } from "@mui/material";
import { IDataToSearch, IObjSortInfos } from "../../layouts/luzes/SearchScreen/type";

export interface IHeaderSearchScreen {
  handleSubmitSearchAndFilter: () => void;
  handleStatusChange: (e: SelectChangeEvent) => void;
  handleSetDataToSearch: (value: string | unknown, attribute: string) => void;
  handleSort: (objSortInfos:IObjSortInfos) => void;
  dataToSearch: IDataToSearch;
  paginationInfos?:IPagination 
}

export interface IPagination {
  page: number,
  pageSize: number,
  totalItems: number,
  totalPages: number,
}