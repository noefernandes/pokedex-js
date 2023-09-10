import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokemon-pokedex-clone.onrender.com',
})


export default api;