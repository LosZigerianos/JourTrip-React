import axios from 'axios';
import _ from 'lodash';
import { BASE_URL } from '../config/api';
import { JOURTRIP_STATE } from '../config/redux';

export function configureAxios() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}

export function configureToken(token) {
    axios.defaults.headers.common['x-access-token'] = token;
}

export function login(data) {
    const url = '/users/login';
    return axios.post(url, data);
}

export function fetchFeedListByUser(userId) {
    const url = `/comments/userId/${userId}/timeline`;
    return axios.get(url);
}
