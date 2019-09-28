import axios from 'axios';
import { snakeCaseRequest, camelCaseResponse, snakeCaseParams } from '@/utils/axios';

axios.defaults.paramsSerializer = snakeCaseParams;
axios.defaults.transformRequest = [snakeCaseRequest];
axios.defaults.transformResponse = [camelCaseResponse];

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: process.env.VUE_APP_HOST + process.env.VUE_APP_URL,
});

export const setToken = (token: string) => {
  axios.defaults.headers.common['x-access-token'] = token;
  api.defaults.headers.common['x-access-token'] = token;
};

export default api;
