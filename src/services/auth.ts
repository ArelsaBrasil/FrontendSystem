import { api } from "./api";

type SignInRequestData = {
  userName: string;
  password: string;
};

export async function signInRequest(data: SignInRequestData) {
  try {
    const response = await api.post("/login", data);
    return response.data;
  } catch (error) {
    throw new Error("Usuário e/ou senha inválido(s)");
  }
}

export async function validateUser() {
  try {
    const response = await api.get("/profile");
    return response.data;
  } catch (error) {
    throw new Error("Token inválido. ");
  }
}

export async function validateCurrentUser(currentUserDataToken: string) {
  try {
    api.defaults.headers["Authorization"] = `Bearer ${currentUserDataToken}`;
    const response = await api.get("/profile");
    return response.data;
  } catch (error) {
    throw new Error("Token inválido. ");
  }
}
