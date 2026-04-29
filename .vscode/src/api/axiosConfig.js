import axios from 'axios';

export default axios.create({
    baseURL: 'http://aa41c7d8a2edc4c2bb6f45d17272bf78-1953145457.us-east-1.elb.amazonaws.com:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
