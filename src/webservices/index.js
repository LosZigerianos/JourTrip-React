import axios from 'axios';
import { BASE_URL } from '../config/api';
import qs from 'qs';

export function configureAxios() {
    axios.defaults.baseURL = BASE_URL;
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}

export function login(data) {
    const url = '/users/login';
    return axios.post(url, data);
}

// export function fetchHouses() {
//     const url = "/casas";
//     return axios.get(url);
// }

// export function fetchCharactersByHouse(params) {
//     const url = `/personajes?${qs.stringify(params, { skipNulls: true })}`;
//     return axios.get(url);
// }

// export function postCharacter(data) {
//     const url = '/personajes';
//     return axios.post(url, data);
// }
