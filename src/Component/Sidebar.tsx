import React, { useState, useEffect } from "react";

import { makeStyles, useTheme, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

const sidebarTheme = createMuiTheme({
  overrides: {
    MuiListItemIcon: {
      root: {
        minWidth: "40px",
      },
    },
  },
});

const Sidebar = (props: any) => {
  const {
    container,
    mobileOpen,
    handleDrawerToggle,
    handleSelectedItem,
    selectedItem,
  } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem
            button
            onClick={(event) => handleSelectedItem(event, 0)}
            selected={selectedItem === 0}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem
            button
            onClick={(event) => handleSelectedItem(event, 1)}
            selected={selectedItem === 1}
          >
            <ListItemIcon>
              <FormatListNumberedIcon />
            </ListItemIcon>
            <ListItemText primary={"Todos"} />
          </ListItem>
          <ListItem
            button
            onClick={(event) => handleSelectedItem(event, 2)}
            selected={selectedItem === 2}
          >
            <ListItemIcon>
              <FormatListNumberedIcon />
            </ListItemIcon>
            <ListItemText primary={"Posts"} />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <ThemeProvider theme={sidebarTheme}>
      <Hidden mdUp>
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={() => handleDrawerToggle()}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </ThemeProvider>
  );
};

export default Sidebar;
