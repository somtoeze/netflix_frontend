import axios from 'axios';

export default axios.create({
    baseURL: 'http://34.239.170.112:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
