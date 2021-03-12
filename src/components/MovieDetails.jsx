import React from "react";
import {
  Typography,
  Box,
  Toolbar,
  AppBar,
  ButtonBase,
  Paper,
  Grid,
} from "@material-ui/core";
import { movieDetailsStyles } from "../styles";

const MovieDetails = ({ movieDetails }) => {
  const classes = movieDetailsStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h3">{movieDetails.Title}</Typography>
          <Typography variant="h4">{movieDetails.Year}</Typography>
        </Toolbar>
      </AppBar>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={movieDetails.Poster}
              />
            </ButtonBase>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              className={classes.cast}
              marginTop={2}
            >
              <Box className={`${classes.language} ${classes.padDetails}`}>
                <Typography color="textSecondary" variant="body2" gutterBottom>
                  Language
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {movieDetails.Language}
                </Typography>
              </Box>
              <Box className={`${classes.duration} ${classes.padDetails}`}>
                <Typography color="textSecondary" variant="body2" gutterBottom>
                  Duration
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {movieDetails.Runtime}
                </Typography>
              </Box>
            </Box>
            <Box className={`${classes.cast} ${classes.padDetails}`}>
              <Typography color="textSecondary" variant="body2" gutterBottom>
                Cast
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {movieDetails.Actors}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h5">Synopsis</Typography>
            <Typography className={classes.plot} variant="body2">
              {movieDetails.Plot}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MovieDetails;
