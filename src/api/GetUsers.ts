import { api } from "./Api";

export async function GetUsers() {
  try {
    const response = await api.get(`buscando-usuarios`);
    return response.data;
  } catch (error) {
    throw new Error("Operação não efetuada com sucesso. ");
  }
}
