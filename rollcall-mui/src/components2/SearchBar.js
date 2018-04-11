import React from "react";
import PropTypes from "prop-types";
import { withStyles, Input, Icon } from "material-ui";
import { Search } from "material-ui-icons";

const styles = theme => ({
  searchIcon: {
    padding: "4px 4px 0px 0px",
    color: "rgba(255, 255, 255, 0.5)"
  },
  search: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "4px 12px"
  }
});

class SearchBar extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const icon = (
      <Icon className={classes.searchIcon}>
        <Search />
      </Icon>
    );
    return (
      <Input
        id="search"
        placeholder="Search"
        type="search"
        className={classes.search}
        startAdornment={icon}
        disableUnderline={true}
        {...rest}
      />
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SearchBar);
