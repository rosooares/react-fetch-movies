import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import '../css/Search.css';

function Search() {

    const [data, setData] = useState({ states: [] });
    useEffect(async () => {
      const result = await axios(
        'https://api-content.ingresso.com/v0/states/',
      );
      setData(result.data);
    }, []);

    const state = data && data.length > 0 && data.map(state => state.name);

    return (
      <form className="search-form" >
        <Autocomplete
        id="combo-box-demo"
        options={state}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Selecione seu estado" variant="outlined" />}
      />
      </form>
    );
  }

export default Search;