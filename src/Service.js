import { useState, useEffect } from 'react';
import axios from 'axios';

export const useMoviesApi = (initialUrl, initialMovies) => {
  const [movies, setMovies] = useState(initialMovies);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await axios(url, {
          headers: {
            Accept: 'PLAU'
          }
        });
        setMovies(result.data.items);
      } catch (error) {
        console.log('error', error)
      }
    };
    fetchMovies();
  }, [url]);
  return [{ movies }, setUrl];
};