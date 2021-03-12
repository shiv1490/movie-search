import React from "react";
import Drawer from "./Drawer";
import { createShallow } from "@material-ui/core/test-utils";
import { TextField } from "@material-ui/core";
const state = {
  defaultMovieList: [
    {
      Poster: "test",
      Title: "El Camino: A Breaking Bad Movie",
      Type: "movie",
      Year: "2019",
      imdbID: "tt9243946",
    },
  ],
  movieDetails: {
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
};
describe("MovieList.js", () => {
  let shallow;
  let wrapper;
  beforeAll(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(
      <Drawer
        defaultMovieList={state.defaultMovieList}
        movieDetails={state.movieDetails}
      />
    );
  });

  it("should check `componentDidMount()`", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "fetchMovieList");
    instance.componentDidMount();
    expect(instance.fetchMovieList).toHaveBeenCalledTimes(1);
  });

  it("should call handleTextChange and throttleHandleChange on change of text", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "handleTextChange");
    jest.spyOn(instance, "throttleHandleChange");
    wrapper
      .find(TextField)
      .simulate("change", { target: { value: "New Comment" } });
    expect(instance.handleTextChange).toHaveBeenCalledTimes(1);
    expect(instance.throttleHandleChange).toHaveBeenCalledTimes(1);
  });
});
