import React, { Component } from "react";
import {
  Drawer,
  AppBar,
  TextField,
  Divider,
  withStyles,
  CssBaseline,
  InputAdornment,
  IconButton,
  Box,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";
import debounce from "lodash.debounce";
import { drawerStyles } from "../styles";

const baseUrl = "http://www.omdbapi.com/?apikey=f1fc4255";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultMovieList: [],
      movieDetails: null,
      pageResultCount: null,
      searchText: null,
    };
    this.throttleHandleChange = debounce(
      this.throttleHandleChange.bind(this),
      500
    );
  }

  fetchMovieList = async (pagekey, searchText) => {
    const searchQuery = searchText || "movie";
    const result = await axios(
      `${baseUrl}&s=${searchQuery}&plot=long&type=movie&page=${pagekey}`
    );
    const movieList = result.data.Search || [];
    const pageCount = Math.floor(result.data.totalResults / 10) || 1;
    this.setState({
      ...this.state,
      defaultMovieList: movieList.sort((a, b) => b.Year - a.Year),
      pageResultCount: pageCount,
    });
  };

  fetchMovieDetails = async (movieId) => {
    const response = await axios(`${baseUrl}&plot=full&i=${movieId}`);
    this.setState({ ...this.state, movieDetails: response.data });
  };

  throttleHandleChange(searchText) {
    this.setState({ ...this.state, searchText });
    this.fetchMovieList(1, searchText);
  }

  handleTextChange = (searchText) => {
    this.throttleHandleChange(searchText);
  };

  componentDidMount() {
    this.fetchMovieList(1, "movie");
  }

  render() {
    const { classes } = this.props;
    const {
      defaultMovieList,
      pageResultCount,
      movieDetails,
      searchText,
    } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}></AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.searchText}>
            <TextField
              label="Search movies"
              variant="outlined"
              onChange={(e) => {
                this.handleTextChange(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Divider />
          <MovieList
            defaultMovieList={defaultMovieList}
            fetchMovieDetails={this.fetchMovieDetails}
          ></MovieList>
          {pageResultCount > 10 ? (
            <Pagination
              count={pageResultCount}
              siblingCount={0}
              onChange={(e, pageNumber) =>
                this.fetchMovieList(pageNumber, searchText)
              }
            />
          ) : null}
        </Drawer>
        <main className={classes.content}>
          {movieDetails ? (
            <MovieDetails movieDetails={movieDetails}></MovieDetails>
          ) : (
            <Box display="flex" justifyContent="center" mt={32}>
              <Typography variant="h6">
                Please select a title from the sidebar
              </Typography>
            </Box>
          )}
        </main>
      </div>
    );
  }
}

export default withStyles(drawerStyles)(Layout);
