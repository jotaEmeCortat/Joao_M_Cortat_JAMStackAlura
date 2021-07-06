import { parseCookies } from 'nookies';
import { BASE_URL, HttpClient } from '../../infra/http/HttpClient';
import { LOGIN_COOKIE_APP_TOKEN } from '../login/loginService';

export const userService = {
  async getProfilePage(ctx) {
    try {
      const cookies = parseCookies(ctx);
      const token = cookies[LOGIN_COOKIE_APP_TOKEN];
      const response = await HttpClient(`${BASE_URL}/api/users/posts`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return {
        user: {
          totalLikes: 0,
        },
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts');
    }
  },
};
