import axios from 'axios';
import Vue from 'vue';
import { snakeCaseRequest, camelCaseResponse, snakeCaseParams } from '@/utils/axios';

axios.defaults.paramsSerializer = snakeCaseParams;
axios.defaults.transformRequest = [snakeCaseRequest];
axios.defaults.transformResponse = [camelCaseResponse];

axios.interceptors.response.use(undefined, (error) => {
  if (error.request && error.request.status && error.request.status === 401) {
    Vue.$router.replace('/login');
  }
  return Promise.reject(error);
});

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
