import { makeStyles } from "@material-ui/core/styles";

export const movieDetailsStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  plot: {
    marginTop: theme.spacing(2),
  },
  image: {
    height: 250,
  },
  cast: {
    border: "1px solid #C4C4C4 ",
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: 250,
    paddingLeft: theme.spacing(6),
    background:
      "linear-gradient(0deg, #000000 2.92%, rgba(0, 0, 0, 0.6875) 100%), #FFFFFF",
  },
  language: {
    flexFlow: "wrap",
    width: "50%",
    borderRight: "1px solid #C4C4C4",
  },
  padDetails: {
    padding: "3px",
  },
  duration: {
    flexFlow: "wrap",
    width: "50%",
  },
  img: {
    margin: "auto",
    display: "block",
    width: "100%",
    maxHeight: "100%",
  },
}));

const drawerWidth = 300;

export const drawerStyles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  searchText: {
    padding: theme.spacing(3),
  },
  movieImage: {
    height: "3rem",
    width: "2rem",
  },
});

export const movieListStyles = makeStyles(() => ({
  movieImage: {
    height: "3rem",
    width: "2rem",
  },
}));
