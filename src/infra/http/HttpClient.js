export const BASE_URL = 'https://instalura-api-git-master-omariosouto.vercel.app';

export async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((resposnse) => {
      if (resposnse.ok) {
        return resposnse.json();
      }

      throw new Error('error server');
    });
}
