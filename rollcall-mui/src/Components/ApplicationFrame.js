import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import AccountCircle from "material-ui-icons/AccountCircle";
import { List, ListItem } from "../Basics";
import Avatar from "material-ui/Avatar";
import SchoolIcon from "material-ui-icons/AccountBalance";
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  fullWidth: {
    flex: 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

function ApplicationFrame({ classes, children, ...rest }) {
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            noWrap
            className={classes.fullWidth}
          >
            SICLE
          </Typography>
          <IconButton color="inherit" aria-label="Account">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem
            text="Roll Call"
            icon={
              <Avatar>
                <SchoolIcon />
              </Avatar>
            }
          />
          <ListItem
            text="Students"
            icon={
              <Avatar>
                <SchoolIcon />
              </Avatar>
            }
          />
          <ListItem
            text="Staff"
            icon={
              <Avatar>
                <SchoolIcon />
              </Avatar>
            }
          />
          <ListItem
            text="Staff"
            icon={
              <Avatar>
                <SchoolIcon />
              </Avatar>
            }
          />
        </List>
        <Divider />
        <p>Some2</p>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

ApplicationFrame.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ApplicationFrame);
