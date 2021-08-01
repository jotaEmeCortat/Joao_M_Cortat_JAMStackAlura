import { BASE_URL, HttpClient } from '../../infra/http/HttpClient';
import authService from '../auth/authService';

const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClient(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return {
        user: {
          bio: 'Sempre no 220v, atrás de um filme/rolê e codando desafios em JS',
          publicacoes: response.data.length,
          seguindo: '22k',
          seguidores: '134k',
        },
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts');
    }
  },
};

export default userService;
