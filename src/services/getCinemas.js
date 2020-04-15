import axios from 'axios';

export function getCinemas(param) {
  return axios
    .get(`https://api-content.ingresso.com/v0/theaters/city/${param}/partnership/1`)
    .then(response => ({
      cityName: response.data.items[0].cityName,
      cinema:
        response.data.items
          .flat(Infinity)
          .map(cinema => ({
            id: cinema.id,
            image: cinema.images[0].url,
            name: cinema.name,
            address: cinema.address,
            number: cinema.number,
          }))
    }))
    .catch(error => console.error('error', error))
};