import { useState } from "react";
import { api } from "../../api/Api";

function useDeleteUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const deleteUser = async (userId: number) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.delete(`http://localhost:3001/user/${userId}`);
      // Verifique a resposta da API para confirmar o sucesso da exclusão
      return response.status === 200 ? true : false;
    } catch (error) {
      if (typeof error === "string") {
        setError("Erro ao excluir usuário: " + error);
      } else {
        setError("Erro desconhecido ao excluir usuário");
      }
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, loading, error, success };
}

export default useDeleteUser;
