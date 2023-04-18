import axios from 'axios';
import { store } from '../Store/store';

const axiosInstance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
});

// axiosInstance.interceptors.request.use((config) => {
//     console.log('config',config)
//     const state = store.getState();
//     const token = state.auth.auth.idToken;
//     config.params = config.params || {};
//     config.params['auth'] = token;

//     return config;
// });

export default axiosInstance;
