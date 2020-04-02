import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../css/MovieTheater.css';

function MovieTheater(props) {
  const { movies } = props;

    return (
    <Grid container className="root">
      <Grid className="box-title-movie"> 
        <LocationOnIcon style={{color: "#b20000", fontSize: "30px"}} />
        <Typography variant="h5">
           Cinema - {movies && movies.length > 0 && movies[0].cityName}
        </Typography>
      </Grid>

      {movies && movies.length > 0 && movies.map(i =>       
        <Grid item key={i.id} xs={4} className="box-movie"> 
          <Grid item xs={2}>
           {i.images && i.images.length > 0 && i.images.map(imag => 
            <img key={i.id} className="img-movies" alt="Remy Sharp" src={imag.url} />
           )}
          </Grid>
          <Grid item xs={10}>
            <Typography variant="button" className="title-box-movie"> {i.name} </Typography> 
            <Typography> {i.address + ', ' + i.number} </Typography> 
          </Grid>
        </Grid>
      )}

    </Grid>
    );
  }

export default MovieTheater;