import { api } from "./Api";

export async function CurrengGroups() {
  try {
    const response = await api.get(`buscando-equipe-vigente`);
    return response.data;
  } catch (error) {
    throw new Error("Operação não efetuada com sucesso. ");
  }
}
