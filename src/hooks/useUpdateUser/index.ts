import { useState } from "react";
import { api } from "../../api/Api";

function useUpdateUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  interface User {
    id: number;
    name: string;
    userName: string;
    location: string;
    positionJob: string;
  }

  const updateUser = async (data: User) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.put(`http://localhost:3001/user`, data);
    } catch (error) {
      if (typeof error === "string") {
        setError("Erro ao atualizar usuário: " + error);
      } else {
        setError("Erro desconhecido ao atualizar usuário");
      }
    } finally {
      setLoading(false);
    }
  };

  return { updateUser, loading, error };
}

export default useUpdateUser;
