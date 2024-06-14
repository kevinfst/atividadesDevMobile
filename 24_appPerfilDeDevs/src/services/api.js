import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/'  // Remova o ${username} daqui
});

export default api;
