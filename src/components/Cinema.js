import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../css/Cinema.css';

function Cinema({ cinemas: { cityName, cinema } }) {
  return (
    <Grid container className="root">
      <Grid className="box-title-movie">
        <LocationOnIcon style={{ color: "#b20000", fontSize: "30px" }} />
        <Typography variant="h5">
          Cinema - {cityName}
        </Typography>
      </Grid>

      {cinema.map(cinemaItem => (
        <>
          <Grid item xs={4} className="box-movie">
            <Grid item xs={2}>
              <img className="img-movies" alt="Remy Sharp" src={cinemaItem.image} />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="button" className="title-box-movie"> {cinemaItem.name} </Typography>
              <Typography> {cinemaItem.address + ', ' + cinemaItem.number} </Typography>
            </Grid>
          </Grid>
        </>
      ))}
    </Grid>
  );
}

export default Cinema;