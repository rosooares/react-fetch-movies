import React, { Fragment, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { useMoviesApi } from '../Service';
import '../css/Search.css';

function Search() {
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
         });

    return (
      <Fragment>
      <form className="search-form" 
        onSubmit={event => {
          doFetch(
            `https://api-content.ingresso.com/v0/theaters/city/${query.value}/partnership/1`,
          );
          event.preventDefault();
        }}
      >
      
      <Autocomplete
        id="autocomplete-cities"
        className="autoComplete"
        onChange={(event, value) => setQuery(value)}
        options={arrayCities}
        getOptionLabel={(option) => option.text}
        renderInput={(params) => <TextField {...params} label="Selecione sua cidade" variant="outlined" />}
      />
      <Button variant="contained" color="primary" type="submit">
        Pesquisar
      </Button>

      </form>

      <ul>
         
          {
            movies.items.map(item => <li> { item.name } </li>)
          }
        
      </ul>
      </Fragment>
    );
  }

export default Search;