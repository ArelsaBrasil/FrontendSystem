import { useState } from "react";
import { api } from "../../api/Api";

interface NewUser {
  name: string;
  userName: string;
  password: string;
  location: string;
  positionJob: string;
}

function useCreateUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any | null>(null);

  const createUser = async (data: NewUser) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.post(`http://localhost:3001/user`, data);
      setResponse(response.data); // Ou ajuste conforme a estrutura real da resposta
    } catch (error) {
      if (typeof error === "string") {
        setError("Operação não efetuada com sucesso: " + error);
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading, error, response };
}

export default useCreateUser;


