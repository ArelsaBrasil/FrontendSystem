import { api } from "./Api";

type TDataToLink = {
  osId: number;
  groupName: string;
};
export async function SendDesignationOS(groupLinks: TDataToLink[]) {
  try {
    const dataToLink = { groupLinks };
    console.log(dataToLink);
    const response = await api.post("vinculando-os-equipe", dataToLink);

    return response.data;
  } catch (error) {
    throw new Error("Operação não efetuada com sucesso. ");
  }
}
