import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID PKe-LvjFtWhXcP6tc4_BImPoXiax035YSEWrZBQjx98'
    }
});
