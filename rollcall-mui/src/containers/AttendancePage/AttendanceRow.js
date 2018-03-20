import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles, ListItem, ListItemText } from "material-ui";

const styles = theme => ({});

class AttendanceRow extends Component {
  render() {
    const { student } = this.props;
    return (
      <ListItem>
        <ListItemText primary={student.familyName + " " + student.givenNames} />
      </ListItem>
    );
  }
}

AttendanceRow.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired
};

export default withStyles(styles)(AttendanceRow);
