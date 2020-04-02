import axios from 'axios';

export function getStates() {
    return axios
    .get('https://api-content.ingresso.com/v0/states/')
    .then(response => response.data)
    .catch(error => console.log('error', error))
};

