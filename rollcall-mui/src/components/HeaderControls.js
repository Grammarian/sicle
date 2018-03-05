import React from "react";
import { withStyles, IconButton, Hidden } from "material-ui";
import { Person } from "material-ui-icons";

import SearchBar from "./SearchBar";

import headerControlsStyle from "../styles/headerControlsStyle";

class HeaderControls extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSearchChange = evt => {
    console.log("onChange", evt);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <SearchBar onChange={this.handleSearchChange} />
        <IconButton
          color="inherit"
          aria-label="Person"
          className={classes.buttonLink}
        >
          {/* TODO - Reflect auth status of current user */}
          <Person className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(headerControlsStyle)(HeaderControls);
