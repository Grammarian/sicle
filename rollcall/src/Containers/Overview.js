import React, { Component } from "react";
import PropTypes from "prop-types";

import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

class Overview extends Component {
  render() {
    if (this.props.data.loading) {
      return <Loading />;
    }
    if (this.props.data.error) {
      return <Error data={this.props.data} />;
    }
    const { allSchools, allTeachers, allStudents } = this.props.data;
    return (
      <div>
        <h1>Overview</h1>
        <h2>School</h2>
        <ul>{allSchools.map(school => <li>{school.name}</li>)}</ul>
        <h2>Teachers</h2>
        <ul>
          {allTeachers.map(teacher => (
            <li>
              {teacher.familyName}, {teacher.givenNames}
            </li>
          ))}
        </ul>
        <h2>Students</h2>
        <ul>
          {allStudents.map(student => (
            <li>
              {student.familyName}, {student.givenNames}
            </li>
          ))}
        </ul>
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
