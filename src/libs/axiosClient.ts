import axios from 'axios';
const axiosClient = axios.create({
  baseURL: 'https://b213-112-169-5-244.jp.ngrok.io/',
  // withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': 'https://67cc-112-169-5-244.jp.ngrok.io',
    'ngrok-skip-browser-warning': '69420',
  },
});

export default axiosClient;
