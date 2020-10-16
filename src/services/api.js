import axios from 'axios';

const api = axios.create({
  baseURL: 'https://transit.diego-nascimento.com/api/',
});

export default api;
