import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 1000,
    headers: { 'Authorization': 'Bearer token' }
});