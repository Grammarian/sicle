import React, { Component } from "react";
import PropTypes from "prop-types";

import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import { Heading, SubHeading, List, ListItem } from "../Basics";
import Checkbox from "material-ui/Checkbox";
// import IconButton from "material-ui/IconButton";
import Avatar from "material-ui/Avatar";
import SchoolIcon from "material-ui-icons/AccountBalance";

const defaultData = {
  allSchools: [
    { name: "Springfield High" },
    { name: "Sky High" },
    { name: "Jump Street High School" }
  ],
  allTeachers: [
    { givenNames: "Aaron", familyName: "Yurt" },
    { givenNames: "Alice", familyName: "Cooper" },
    { givenNames: "Bart", familyName: "Simpson" }
  ],
  allStudents: [
    { givenNames: "Terrence Trent", familyName: "Draby" },
    { givenNames: "Joe", familyName: "Fox" },
    { givenNames: "Marge", familyName: "Simpson" }
  ]
};
class Overview extends Component {
  render() {
    if (this.props.data.loading) {
      return <Loading />;
    }
    // if (this.props.data.error) {
    //   return <Error data={this.props.data} />;
    // }
    const { allSchools, allTeachers, allStudents } = defaultData; //this.props.data;
    return (
      <div>
        <Heading>Overview</Heading>
        <SubHeading>School</SubHeading>
        <List>
          {allSchools.map(school => (
            <ListItem
              text={school.name}
              icon={
                <Avatar>
                  <SchoolIcon />
                </Avatar>
              }
              action={<Checkbox>XX</Checkbox>}
            />
          ))}
        </List>
        <SubHeading>Teachers</SubHeading>
        <List>
          {allTeachers.map(teacher => (
            <ListItem text={teacher.familyName + " " + teacher.givenNames} />
          ))}
        </List>
        <SubHeading>Students</SubHeading>
        <List>
          {allStudents.map(student => (
            <ListItem text={student.familyName + " " + student.givenNames} />
          ))}
        </List>
      </div>
    );
  }
}

Overview.propTypes = {
  data: PropTypes.object.isRequired
};

// We use the gql tag to parse our query string into a query document
const AllData = gql`
  query AllData {
    allSchools {
      name
    }
    allTeachers {
      givenNames
      familyName
      school {
        name
      }
    }
    allStudents {
      givenNames
      familyName
      school {
        name
      }
    }
  }
`;

export default graphql(AllData)(Overview);
