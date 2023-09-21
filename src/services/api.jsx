import axios from 'axios';

// Base da URL: https://swapi.dev/api/
// endpoints: people, films, starships, planets, 

const api = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export default api;