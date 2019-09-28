import axios from './axios';

export const upload = (formData) =>
  axios
    .post('/poll/download-file', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    .then((response) => response.data);
