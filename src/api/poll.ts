import axios from './axios';

export const getPolls = () => axios.get('/poll/get-polls').then((response) => response.data);

export const createPoll = (data: any) => axios.post('/poll/create', data).then((response) => response.data);

export const deletePoll = (id: string) => axios.post(`/poll/delete-poll`, { _id: id }).then((response) => response);
