import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles, Grid } from "material-ui";
import { Accessibility } from "material-ui-icons";
import IconCard from "../../components/IconCard";
import ItemGrid from "../../components/ItemGrid";
import AttendanceTopPanel from "./AttendanceTopPanel";
import AttendanceList from "./AttendanceList";

const attendancePageStyle = {
  message: {
    fontSize: "200%"
  }
};
class AttendancePage extends Component {
  state = {
    lessonId: null
  };
  handleLessonChanged = lessonId => {
    this.setState({
      lessonId: lessonId
    });
  };
  render() {
    const { classes } = this.props;
    const { lessonId } = this.state;
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12}>
            <IconCard
              top={<AttendanceTopPanel onChange={this.handleLessonChanged} />}
              icon={Accessibility}
              iconColor="orange"
            >
              {!lessonId && (
                <div className={classes.message}>
                  Select class from the above list
                </div>
              )}
              {!!lessonId && <AttendanceList lessonId={lessonId} />}
            </IconCard>
          </ItemGrid>
        </Grid>
        <p>something</p>
      </div>
    );
  }
}

AttendancePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(attendancePageStyle)(AttendancePage);
