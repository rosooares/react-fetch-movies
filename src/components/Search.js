import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
// import { useMoviesApi } from './Service';
import '../css/Search.css';

function Search({ cities, setResults, query, setQuery }) {

    // async function searchMovies(event) {
    //   event.persist()
    //   event.preventDefault();
    //   setResults(await useMoviesApi(query)); 
    // }

  return (
      <form className="search-form" 
        // onSubmit={async event => {setResults([]); searchMovies(event)}}
      >
      <Autocomplete
        id="autocomplete-cities"
        className="auto-complete"
        onChange={event => setQuery(event.target.value)}
        options={cities}
        getOptionLabel={option => option.name}
        renderInput={params => <TextField {...params} label="Selecione sua cidade" variant="outlined" />}
      />
      <Button variant="contained" className="button-search" type="submit">
        Pesquisar
      </Button>

      </form>
    );
  }

export default Search;