import axios from 'axios';

const api = axios.create({
  baseURL: process.env.URLAPI,
});

export default api;
