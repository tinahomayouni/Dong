import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_PATH,
  timeout: 1000,
  headers: {}
});
// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default Axios;
