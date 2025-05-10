import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4500/api', // Update if hosted elsewhere
});

export default instance;
