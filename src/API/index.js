import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 9000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;