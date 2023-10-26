import axios from 'axios';
import BACKEND_URL from '../constants/BACKEND_KEYS.JS';

const api = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const get = async (path, params={}) => {
    const response = await api.get(path, { params });
    
    return response?.data;
}

const BackendService = { get };

export default BackendService;
