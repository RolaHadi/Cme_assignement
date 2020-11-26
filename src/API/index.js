import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 9000,
    headers: {
        'Content-Type': 'application/json',
    }

})