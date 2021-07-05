import { setCookie, destroyCookie } from 'nookies';
import { BASE_URL, HttpClient } from '../../infra/http/HttpClient';

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN';

export const loginService = {
  async login({
    username,
    password,
  }) {
    return HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    }).then((json) => {
      const { token } = json.data;
      const DAY_IN_SECONDS = 86400;

      // save token
      setCookie(null, LOGIN_COOKIE_APP_TOKEN, token, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      });
      return {
        token,
      };
    });
  },
  async logout(ctx, destroyCookieModule = destroyCookie) {
    destroyCookieModule(ctx, LOGIN_COOKIE_APP_TOKEN, { path: '/login' });
  },
};
