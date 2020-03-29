import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import MovieTheater from './components/MovieTheater';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useMoviesApi } from './Service';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const [{ movies }, doFetch] = useMoviesApi('https://api-content.ingresso.com/v0/theaters/city/1/partnership/1', { items: []});


    useEffect(() => {
      async function fetchData() {
        const result = await axios(
          'https://api-content.ingresso.com/v0/states/',
        );
        setData(result.data);
      }
      fetchData();
    }, []); 

    const arrayCities = data && data.length && data
      .map(state => { return state.cities
      .map(cities => { return {text : cities.name + ' - ' + cities.uf, value: cities.id} }) 
      }).reduce((pre, cur) => {
            return pre.concat(cur);
         }).sort((a,b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0));

  return (
    <div className="App">
      <Header />
      <div className="header">
        <Typography variant="h4"> Encontre o cinema pertinho da sua casa!</Typography>
        <Search 
          arrayCities={arrayCities}
          query={query}
          setQuery={setQuery}
          doFetch={doFetch}
        />
      </div>
      <MovieTheater 
        movies={movies}
      />
    </div>
  );
}

export default App;
