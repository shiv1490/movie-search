import React from "react";
import {
  ListItemText,
  List,
  Box,
  ListItem,
  Divider,
  Typography,
} from "@material-ui/core";
import { movieListStyles } from "../styles";

const MovieList = ({ defaultMovieList, fetchMovieDetails }) => {
  const classes = movieListStyles();

  return (
    <>
      {defaultMovieList.length ? (
        <List>
          {defaultMovieList.map((movie) => (
            <div key={movie.imdbID}>
              <ListItem button onClick={() => fetchMovieDetails(movie.imdbID)}>
                <img
                  alt="movie"
                  src={movie.Poster}
                  className={classes.movieImage}
                ></img>
                <Box marginLeft={2}>
                  <ListItemText primary={movie.Title} />
                  <ListItemText secondary={movie.Year} />
                </Box>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      ) : (
        <Box display="flex" justifyContent="center" mt={32}>
          <Typography variant="h6">No Movies Found</Typography>
        </Box>
      )}
    </>
  );
};

export default MovieList;
