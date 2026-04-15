import axios from 'axios';

export default axios.create({
    baseURL: 'http://54.242.42.140:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
