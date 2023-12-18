import { api } from "./Api";

export async function DefiningNewGroups(data: TGroupComposition[]) {
  try {
    const currentGroups = {
      currentGroups: data,
    };
    const response = await api.post(`http://localhost:3001/criando-nova-equipe`, currentGroups);
    return response.data;
  } catch (error) {
    throw new Error("Operação não efetuada com sucesso.");
  }
}
