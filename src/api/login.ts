import axios, { setToken } from './axios';

export const signIn = async (phone: string, password: string) => {
  const data = await axios.post('/user/login', { phone, password }).then((response) => response.data);
  console.log(data);
  if (data.token) {
    setToken(data.token);
    localStorage.setItem('token', data.token);
  }
  return data;
};
