import axios from 'axios';

const api = axios.create({
  baseURL: process.env.APIURL,
});

export default api;
