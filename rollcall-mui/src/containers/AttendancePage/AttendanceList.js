import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles, List } from "material-ui";
import AttendanceRow from "./AttendanceRow";

const styles = {
  list: {},
  container: {}
};

const students = [
  { givenNames: "Fred", familyName: "Smith" },
  { givenNames: "Angeline", familyName: "Smith" },
  { givenNames: "Yentil", familyName: "Smith" }
];

class AttendanceList extends Component {
  render() {
    const { classes, lessonId } = this.props;
    return (
      <div className={classes.container}>
        <div>[list of all students in class "{lessonId}" here]</div>
        <List className={classes.list}>
          {students.map(x => <AttendanceRow student={x} />)}
        </List>
      </div>
    );
  }
}

AttendanceList.propTypes = {
  classes: PropTypes.object.isRequired,
  lessonId: PropTypes.string
};

export default withStyles(styles)(AttendanceList);
