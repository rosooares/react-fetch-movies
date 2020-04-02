import React, { useEffect, useState } from 'react';
import Search from './components/Search';
// import MovieTheater from './components/MovieTheater';
// import { useMoviesApi } from './Service';
import { getStates } from './services/getStates';
import './App.css';

export default function App() {
  const [brazilianStates, setBrazilianStates] = useState([]);
  const [query, setQuery] = useState();
  // const [{ movies }, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setBrazilianStates(await getStates());
    }
    fetchData();
  }, []); 

  const brazilianCities = brazilianStates.length > 0 && brazilianStates
    .map(state => { return state.cities
    .map(cities => { return {text : cities.name + ' - ' + cities.uf, value: cities.id} })})
    .reduce((pre, cur) => { return pre.concat(cur)})
    .sort((a,b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0));


    // async function searchMovies(event) {
    //   event.persist()
    //   event.preventDefault();
    //   setResults(await useMoviesApi(query)); 
    // }

  return (
    <>
      <h3 className="logo">CINEMA</h3>
      <section className="search-cities">
        <h1 className="title"> Encontre o cinema pertinho da sua casa!</h1>
        <Search 
          brazilianCities={brazilianCities}
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
