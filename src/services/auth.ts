import { api } from "./api";

type SignInRequestData = {
  userName: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData) {
  try {
    const response = await api.post("/login", data);
    return response.data;
  } catch (error) {
    throw new Error("Usuário e/ou senha inválido(s)");
  }
}

export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      name: "Diego Fernandes",
      email: "diego@rocketseat.com.br",
      avatar_url: "https://github.com/diego3g.png",
    },
  };
}
