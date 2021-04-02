import React from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import "./App.css";
import Home from "./Container/Home";
import Login from "./Container/Login";
import Signup from "./Container/Signup";

const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: "#166FFD",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#fff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: "#ffffff",
    },
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: "#000000",
      },
      colorSecondary: {
        color: "#757575",
      },
    },
  },
  typography: {
    button: {
      fontSize: "0.9rem",
      textTransform: "none",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const App = (props: RouteComponentProps) => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={themeLight}>
      <main className={classes.content}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </main>
    </MuiThemeProvider>
  );
};

export default withRouter(App);
