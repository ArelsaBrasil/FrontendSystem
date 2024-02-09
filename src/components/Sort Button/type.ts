import { IObjSortInfos } from "../../layouts/luzes/SearchScreen/type";

export interface IButtonsInfos {
  buttonName: string;
  canOrganize: boolean;
  nameToSort?: string;
  initialStateOfSort?: string;
}

export interface IHandleSort {
  handleSort: (objSortInfos:IObjSortInfos) => void;
}
