import axios from 'axios';

export default axios.create({
    baseURL: 'http://13.222.58.210:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
