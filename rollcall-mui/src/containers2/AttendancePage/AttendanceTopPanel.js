import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles, TextField } from "material-ui";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  menu: {
    width: 200
  }
});

// const lessons = [
//   { id: 1, classId: 1, start: new Date(Date.parse("2018-03-01 16:00:00")), end: new Date(Date.parse("2018-03-01 18:00:00"))},
// ]

class AttendanceTopPanel extends Component {
  state = {
    selectedLessonId: ""
  };

  handleLessonChange = event => {
    this.setState({
      selectedLessonId: event.target.value
    });
    this.props.onChange(event.target.value);
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="lesson"
          label="Class"
          className={classes.textField}
          value={this.state.selectedLessonId}
          onChange={this.handleLessonChange}
          margin="none"
        />
      </form>
    );
  }
}

AttendanceTopPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(AttendanceTopPanel);
