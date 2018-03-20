import React from "react";
import PropTypes from "prop-types";

import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Loading from "../components/Loading";
import Error from "../components/Error";

const QUERY = gql`
  query Students {
    allClpStudents {
      id
      givenNames
      familyName
      dateOfBirth
      phone
      location
      daySchool
      srn
      school {
        id
        name
      }
    }
  }
`;

class StudentsQuery extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <Loading />;
    }
    if (this.props.data.error) {
      return <Error data={this.props.data} />;
    }
    return this.props.children(this.props.data);
  }
}

StudentsQuery.propTypes = {
  data: PropTypes.object.isRequired
};

export default graphql(QUERY)(StudentsQuery);
