import axios from 'axios';
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // withCredentials: true,
  headers: {
    // 'Access-Control-Allow-Origin': 'https://67cc-112-169-5-244.jp.ngrok.io',
    'ngrok-skip-browser-warning': '69420',
  },
});

export default axiosClient;
