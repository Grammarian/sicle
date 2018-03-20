import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles, Grid as MuiGrid } from "material-ui";
import { Accessibility } from "material-ui-icons";
import IconCard from "../../components/IconCard";
import ItemGrid from "../../components/ItemGrid";
import { StudentsQuery } from "../../graphql";

import { Grid, Table, Toolbar, SearchPanel, TableHeaderRow } from "@devexpress/dx-react-grid-material-ui";
import {
  SearchState,
  SortingState,
  IntegratedSorting,
  IntegratedFiltering,
  DataTypeProvider
} from "@devexpress/dx-react-grid";

const studentsPageStyle = {
  message: {
    fontSize: "200%"
  }
};

const DateFormatter = ({ value }) => value && value.toLocaleDateString();

const DateTypeProvider = props => <DataTypeProvider formatterComponent={DateFormatter} {...props} />;

class StudentsPage extends Component {
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
    const columns = [
      { name: "name", title: "Name", getCellValue: row => `${row.familyName}, ${row.givenNames}` },
      {
        name: "dateOfBirth",
        title: "DOB",
        getCellValue: row => (!!row.dateOfBirth ? new Date(row.dateOfBirth) : null)
      },
      { name: "phone", title: "Phone" },
      { name: "daySchool", title: "Day School" },
      { name: "location", title: "Campus" },
      { name: "srn", title: "SRN" },
      { name: "school", title: "School", getCellValue: row => (row.school ? row.school.name : undefined) }
    ];

    return (
      <div>
        <MuiGrid container>
          <ItemGrid xs={12}>
            <IconCard top={<div>SOMETHING AT THE TOP</div>} icon={Accessibility} iconColor="green">
              <StudentsQuery>
                {x => (
                  <Grid rows={x.allClpStudents} columns={columns}>
                    <DateTypeProvider for={["dateOfBirth"]} />
                    <SearchState />
                    <SortingState defaultSorting={[{ columnName: "familyName", direction: "asc" }]} />
                    <IntegratedSorting />
                    <IntegratedFiltering />
                    <Table />
                    <TableHeaderRow showSortingControls />
                    <Toolbar />
                    <SearchPanel />
                  </Grid>
                )}
              </StudentsQuery>
            </IconCard>
          </ItemGrid>
        </MuiGrid>
      </div>
    );
  }
}

StudentsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(studentsPageStyle)(StudentsPage);
