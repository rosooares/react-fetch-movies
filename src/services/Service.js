// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export const useMoviesApi = (initialUrl, initialMovies) => {
//   const [movies, setMovies] = useState(initialMovies);
//   const [url, setUrl] = useState(initialUrl);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const result = await axios(url, {
//           headers: {
//             Accept: 'PLAU'
//           }
//         });
//         setMovies(result.data.items);
//       } catch (error) {
//         console.log('error', error)
//       }
//     };
//     fetchMovies();
//   }, [url]);
//   return [{ movies }, setUrl];
// };

import axios from 'axios';

export function useMoviesApi(queryParameter) {
  return axios
  .get(`https://api-content.ingresso.com/v0/theaters/city/${queryParameter.value}/partnership/1`)
  .then(response => response.data.items)
  .catch(error => console.log('error', error))
};