import { IDataToSearch } from "../layouts/luzes/SearchScreen/type";
import { api } from "./Api";

export async function searchAndFilter(dataToSearch: IDataToSearch) {
  const { wordToSearch, status, startDate, endDate, page, sortInfos } =
    dataToSearch;
  const stringifySortInfos = JSON.stringify(sortInfos);
  console.log(stringifySortInfos);
  try {
    const response = await api.get(
      `buscando-atendimentos?wordToSearch=${wordToSearch}&status=${status}&startDate=${startDate}&endDate=${endDate}&page=${page}&sortInfos=${stringifySortInfos}`
    );
    
    return response.data;
  } catch (error) {
    throw new Error("Operação não efetuada com sucesso. ");
  }
}
