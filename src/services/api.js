import axios from 'axios';

const api = axios.create({
  baseURL: 'transit.diego-nascimento.com',
});

export default api;
