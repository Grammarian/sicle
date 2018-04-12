import React from "react";
import PropTypes from "prop-types";

import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Loading from "../components/Loading";
import Error from "../components/Error";

// All GraphQL queries uses the authorization token (passed as a HTTP header in Client.js)
// to identity who is doing this action.
// This special query get information about the current user from the User table.
const QUERY = gql`
  query CurrentUser {
    user {
      id
      email
      name
    }
  }
`;

class CurrentUserQuery extends React.Component {
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

CurrentUserQuery.propTypes = {
  data: PropTypes.object.isRequired
};

export default graphql(QUERY, { options: { fetchPolicy: "network-only" } })(CurrentUserQuery);
