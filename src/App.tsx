import React, { useEffect, useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import "./App.css";
import Home from "./Container/Home";
import TodoList from "./Container/TodoList";
import Posts from "./Container/Posts";
import Login from "./Container/Login";
import Signup from "./Container/Signup";
import { makeStyles } from "@material-ui/core/styles";

const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: "#0091ea",
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
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#ffffff",
        color: "#000000",
      },
    },
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

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#ffffff",
  },
  toolbarFont: {
    marginLeft: 12,
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  toolbar: theme.mixins.toolbar,
  content2: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    padding: theme.spacing(1),
    marginTop: 64,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
}));

const App = (props: RouteComponentProps) => {
  const classes = useStyles();
  let pathname = props.history.location.pathname;
  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    setMobileOpen(false);
    if (pathname === "/") {
      setSelectedItem(0);
    }
    if (pathname === "/todos") {
      setSelectedItem(1);
    }
    if (pathname === "/posts") {
      setSelectedItem(2);
    }
  }, [props.history.location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSelectedItem = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedItem(index);

    if (index === 0) {
      props.history.push("/");
    }
    if (index === 1) {
      props.history.push("/todos");
    }
    if (index === 2) {
      props.history.push("/posts");
    }
  };

  return (
    <MuiThemeProvider theme={themeLight}>
      <main className={classes.content}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/todos">
            <TodoList />
          </Route>
          <Route exact path="/posts">
            <Posts />
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
