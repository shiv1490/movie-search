import React from "react";
import MovieDetails from "./MovieDetails";
import { Box, AppBar } from "@material-ui/core";
import { createShallow } from "@material-ui/core/test-utils";

describe("MovieList.js", () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it("should match the snapshot with Data", () => {
    const props = {
      movieDetails: [
        {
          Title: "Bee Movie",
          Year: "2007",
          Runtime: "91 min",
          Actors:
            "Jerry Seinfeld, Renée Zellweger, Matthew Broderick, Patrick Warburton",
          Plot:
            "When the bee Barry B. Benson graduates from college, he finds that he will have only one job for his entire life, and absolutely disappointed, he joins the team responsible for bringing the honey and pollination of the flowers to visit the world outside the hive. Once in Manhattan, he is saved by the florist Vanessa and he breaks the bee law to thank Vanessa. They become friends and Barry discovers that humans exploit bees to sell the honey they produce. Barry decides to sue the human race, with destructive consequences to nature.",
          Language: "English",
          Country: "USA",
          Poster: "test",
          imdbID: "tt0389790",
        },
      ],
    };
    const tree = shallow(<MovieDetails {...props} />);
    expect(tree.find(AppBar)).toHaveLength(1);
    expect(tree.find("img").prop("src")).toEqual(props.movieDetails.Poster);
    expect(tree.find(Box)).toHaveLength(4);
  });
});
