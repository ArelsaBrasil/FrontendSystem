import { api } from "./Api";
interface NewUser {
  name: string;
  userName: string;
  password: string;
  location: string;
  positionJob: string;
}
export async function CreateNewUser(data: NewUser) {
  try {
    const response = await api.post(`http://localhost:3001/user`, data);
    return response;
  } catch (error: any) {
    throw new Error("Operação não efetuada com sucesso: " + error.message);
  }
}
