import { api } from "./Api";

export const PointsService = {
  getAllPoints: async () => {
    try {
      const response = await api.get(`buscando-pontos`);
      return response.data;
    } catch (error) {
      throw new Error("Falha em retornar pontos. ");
    }
  },

  // Modelo de Método para verificar o token, seguir o mesmo padrão para os demais métodos
  // verifyToken: async (token) => {
  //   try {
  //     const response = await axios.post('/api/verifyToken', { token });
  //     return response.data;
  //   } catch (error) {
  //     throw new Error('Falha na verificação do token');
  //   }
  // },
};

