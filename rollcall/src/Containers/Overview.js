import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Loading from "../Components/Loading";
import Error from "../Components/Error";

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

const Overview = () => (
  <Query query={AllData}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loading />;
      }
      if (error) {
        return <Error error={error} />;
      }
      const { allSchools, allTeachers, allStudents } = data;
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
    }}
  </Query>
);

Overview.propTypes = {
  data: PropTypes.object.isRequired
};

export default Overview;
