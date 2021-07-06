import jwt from 'jsonwebtoken';
import { parseCookies } from 'nookies';
import { BASE_URL, HttpClient } from '../../infra/http/HttpClient';
import { loginService, LOGIN_COOKIE_APP_TOKEN } from '../login/loginService';

export const authService = (ctx) => {
  const cookies = parseCookies(ctx);
  const token = cookies[LOGIN_COOKIE_APP_TOKEN];
  return {
    async hasActiveSession() {
      return HttpClient(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(({ data }) => {
        if (data.authenticated) {
          return true;
        }
        loginService.logout(ctx);
        return false;
      }).catch(() => {
        loginService.logout(ctx);
        return false;
      });
    },
    async getSession() {
      const session = jwt.decode(token);
      return session.user;
    },
  };
};
