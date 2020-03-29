import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import '../css/Search.css';

function Search(props) {
  const { arrayCities, query, setQuery, doFetch } = props;

    return (
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
        className="auto-complete"
        onChange={(event, value) => setQuery(value)}
        options={arrayCities}
        getOptionLabel={(option) => option.text}
        renderInput={(params) => <TextField {...params} label="Selecione sua cidade" variant="outlined" />}
      />
      <Button variant="contained" className="button-search" type="submit">
        Pesquisar
      </Button>

      </form>
    );
  }

export default Search;