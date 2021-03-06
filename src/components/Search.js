import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { getCinemas } from '../services/getCinemas';
import '../css/Search.css';

function Search({ cities, setCinemas }) {
  const [query, setQuery] = useState('');

  return (
    <form className="search-form"
      onSubmit={async event => {
        event.preventDefault();
        setCinemas(await getCinemas(query));
      }}
    >
      <Autocomplete
        id="autocomplete-cities"
        className="auto-complete"
        onChange={(_, value) => setQuery(value.id)}
        options={cities}
        getOptionLabel={option => option.name}
        renderInput={params =>
          <TextField {...params} label="Selecione sua cidade" variant="outlined" />
        }
      />
      <Button variant="contained" className="button-search" type="submit">
        Pesquisar
      </Button>
    </form>
  );
}

export default Search;