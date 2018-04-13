import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import headerStyle from "../styles/headerStyle.js";

const styles = {
  ...headerStyle,
  root: {
    flexGrow: 1
  }
};

function TitleBar(props) {
  const { classes, ...rest } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.container}>
          <Typography variant="title" color="inherit" {...rest} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
};

export default withStyles(styles)(TitleBar);
