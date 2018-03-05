import React, { Component } from "react";
import { withStyles, Grid } from "material-ui";
import { Accessibility } from "material-ui-icons";
import IconCard from "../components/IconCard";
import ItemGrid from "../components/ItemGrid";

const attendancePageStyle = {};
class AttendancePage extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <IconCard title="Some title" icon={Accessibility} iconColor="orange">
              <h2>A level 2 heading</h2>
            </IconCard>
          </ItemGrid>
        </Grid>
        <p>something</p>
      </div>
    );
  }
}

export default withStyles(attendancePageStyle)(AttendancePage);
