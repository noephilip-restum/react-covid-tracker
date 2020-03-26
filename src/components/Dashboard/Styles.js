import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "5px",
    textAlign: "center"
  },
  count: {
    padding: theme.spacing(2),
    margin: "5px",
    textAlign: "center",
    height: "70px"
  },
  countries: {
    padding: theme.spacing(2),
    margin: "5px",
    textAlign: "center",
    height: "650px",
    overflow: "auto"
  },
  map: {
    margin: "5px",
    textAlign: "center",
    height: "680px"
  },
  chart: {
    padding: theme.spacing(2),
    margin: "5px",
    textAlign: "center",
    height: "240px"
  }
}));

export default useStyles;
