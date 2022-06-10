import {backEndUrl} from './env';
import {authFetch} from './fetch';
import {Article} from './redux/slices/articles.slice';
import {User} from './redux/slices/authentication.slice';
import {sleep} from './utils';

export interface LoginForm {
  login: string;
  password: string;
}

export const apiUrl = backEndUrl + '/api';

class Api {
  async addNewArticle(article: Article) {
    const url = apiUrl + '/articles';
    console.log('url: ', url);

    const response = await authFetch(url, {
      method: 'POST',
      body: JSON.stringify(article),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status !== 201) {
      throw new Error('cannot add article');
    }
    return await response.json();
  }

  async connect(loginForm: LoginForm): Promise<User> {
    await sleep(0);
    const response = await fetch(backEndUrl + '/api/connect', {
      method: 'POST',
      body: JSON.stringify(loginForm),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const status = response.status;
    console.log('status: ', status);
    if (status !== 200) {
      throw new Error('oups...');
    }
    const user: User = await response.json();
    return user;
  }

  async disconnect() {
    fetch(backEndUrl + '/api/disconnect', {
      method: 'POST',
    });
  }

  async getArticles(): Promise<Article[]> {
    const response = await authFetch(apiUrl + '/articles');
    return await response.json();
  }

  async isConnected(): Promise<User | undefined> {
    await sleep(0);
    const response = await fetch(backEndUrl + '/api/is-connected');
    const status = response.status;
    console.log('check status: ', status);
    if (status !== 200) {
      return undefined;
    }
    const user = await response.json();
    return user;
  }

  async upload(formData: FormData) {
    return await authFetch(apiUrl + '/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
  }
}

const api = new Api();

export default api;
