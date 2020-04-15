import React, { useEffect, useState } from 'react';
import Search from './components/Search';
// import MovieTheater from './components/MovieTheater';
// import { useMoviesApi } from './Service';
import { getCities } from './services/getCities';
import './App.css';

export default function App() {
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState();
  // const [{ movies }, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setCities(await getCities());
    }
    fetchData();
  }, []); 
    // async function searchMovies(event) {
    //   event.persist()
    //   event.preventDefault();
    //   setResults(await useMoviesApi(query)); 
    // }


  const alphabeticalCities = cities
  .map(city => ({ name: `${city.name} - ${city.uf}`, id: city.id}))
  .sort((a, b) => a.name > b.name ? 1 : -1);

  return (
    <>
      <h3 className="logo">CINEMA</h3>
      <section className="search-cities">
        <h1 className="title"> Encontre o cinema pertinho da sua casa!</h1>
        <Search 
          cities={alphabeticalCities}
          query={query}
          setQuery={setQuery}
          // setResults={setResults}
          // searchMovies={searchMovies}
        />
      </section>
      {/* <MovieTheater 
        movies={movies}
      /> */}
    </>
  );
}
