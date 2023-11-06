import { IDataToSearch } from "../components/TableOfSearchScreen";
import { api } from "./Api";

export async function searchAndFilter(dataToSearch: IDataToSearch) {
  const { wordToSearch, status, startDate ,endDate} = dataToSearch;
  try {
    const response = await api.get(
      `buscando-atendimentos?wordToSearch=${wordToSearch}&status=${status}&startDate=${startDate}&endDate=${endDate}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Operação não efetuada com sucesso. ");
  }
}
