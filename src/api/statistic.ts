import axios from './axios';

export const getStatistic = (id: string) => axios.post('/poll/statistic', { id }).then((response) => response.data);
