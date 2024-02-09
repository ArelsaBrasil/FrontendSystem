import { api } from "./Api";

export async function OsInfos() {
  try {
    const response = await api.get(`osinfos`);
    return response.data;
  } catch (error) {
    throw new Error("Operação não efetuada com sucesso. ");
  }
}
