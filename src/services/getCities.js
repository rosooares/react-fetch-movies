import axios from 'axios';

export function getCities() {
    return axios
    .get('https://api-content.ingresso.com/v0/states')
    .then(response => response.data.map(states => states.cities).flat(Infinity))
    .catch(error => console.log('error', error))
};

