import axios from 'axios';
import { store } from '../Store/store';

const axiosInstance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
});


export default axiosInstance;
