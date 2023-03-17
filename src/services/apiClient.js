// services/apiClient.js
import axios from 'axios';
import { getAuthenticationToken } from '../utils/authenticationHelper.js';

const apiClient = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use((config) => {
  const token = getAuthenticationToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;
