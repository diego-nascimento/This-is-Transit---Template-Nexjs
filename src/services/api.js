import axios from 'axios';

const api = axios.create({
  baseURL: 'https://transit.diego-nascimento.com',
});

export default api;
