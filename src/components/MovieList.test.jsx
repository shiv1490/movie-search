import React from "react";
import MovieList from "./MovieList";
import { List, Box, Typography } from "@material-ui/core";
import { createShallow } from "@material-ui/core/test-utils";

describe("MovieList.js", () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });
  it("should not have list element when there is no data", () => {
    const props = {
      fetchMovieDetails: jest.fn(),
      defaultMovieList: [],
    };
    const tree = shallow(<MovieList {...props} />);
    expect(tree.find(Box)).toHaveLength(1);
    expect(tree.find(List)).toHaveLength(0);
  });

  it("should have list element when data is passed", () => {
    const props = {
      fetchMovieDetails: jest.fn(),
      defaultMovieList: [
        {
          Poster: "test",
          Title: "El Camino: A Breaking Bad Movie",
          Type: "movie",
          Year: "2019",
          imdbID: "tt9243946",
        },
      ],
    };
    const tree = shallow(<MovieList {...props} />);
    expect(tree.find(Typography)).toHaveLength(0);
    expect(tree.find(List)).toHaveLength(1);
  });
});
