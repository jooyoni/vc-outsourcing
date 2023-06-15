import axios from 'axios';
const axiosClient = axios.create({
  // baseURL: '',
  baseURL: process.env.REACT_APP_API_URL,
  // withCredentials: true,
});

export default axiosClient;
