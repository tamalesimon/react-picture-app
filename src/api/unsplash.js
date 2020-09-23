import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID Xn3UHtAk_SmHGzG0cso8j4xNLLwyKiiCnt36UyLqNVs'
    }
});

