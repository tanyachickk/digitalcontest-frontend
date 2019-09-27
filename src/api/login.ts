import axios from './axios';

export const signIn = (phone: string, password: string) =>
  axios.post('/user/login', { phone, password }).then((response) => response.data);
