import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

let token = localStorage.getItem('token');
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export default axios;
