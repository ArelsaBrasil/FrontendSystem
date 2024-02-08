import { useEffect, useState } from "react";
import { api } from "../../api/Api";

type User = {
  id: number;
  name: string;
  userName: string;
  password: string;
  positionJob: string;
  location: string;
};
type UseGetUsersResult = {
  data: User[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

function useGetUsers(): UseGetUsersResult {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    getUsers();
  }, []); //

  const getUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get("http://localhost:3001/user");
      setData(response.data);
    } catch (error) {
      if (typeof error === "string") {
        setError("Erro ao buscar usuários: " + error);
      } else {
        setError("Erro desconhecido ao buscar usuários");
      }
    } finally {
      setLoading(false);
    }
  };
  const refetch = () => { getUsers(); };

  return { data, loading, error, refetch };
}

export default useGetUsers;
