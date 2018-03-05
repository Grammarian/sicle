import React from "react";
import PropTypes from "prop-types";
import { Menu } from "material-ui-icons";
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Button
} from "material-ui";
import cx from "classnames";

import headerStyle from "../styles/headerStyle.js";

import HeaderControls from "./HeaderControls";

function findHeaderLabel(routes, location) {
  const route = routes.find(x => x.path === location.pathname);
  return !!route ? route.headerName : null;
}

function Header({ ...props }) {
  const { classes, color = "primary" } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Button href="#" className={classes.title}>
            {findHeaderLabel(props.routes, props.location)}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <HeaderControls />
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.appResponsive}
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
