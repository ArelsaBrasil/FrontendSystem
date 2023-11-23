import { IDataToSearch } from "../layouts/luzes/SearchScreen";
import { api } from "./Api";

export async function searchAndFilter(dataToSearch: IDataToSearch) {
  const { wordToSearch, status, startDate ,endDate,page} = dataToSearch;
  try {
    const response = await api.get(
      `buscando-atendimentos?wordToSearch=${wordToSearch}&status=${status}&startDate=${startDate}&endDate=${endDate}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Operação não efetuada com sucesso. ");
  }
}
