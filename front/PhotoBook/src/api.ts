import {User} from './redux/slices/authentication.slice';
import {sleep} from './utils';

export interface LoginForm {
  login: string;
  password: string;
}

class Api {
  async connect(loginForm: LoginForm): Promise<User> {
    await sleep(2000);
    const response = await fetch('http://localhost:3000/api/connect', {
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
}

const api = new Api();

export default api;
