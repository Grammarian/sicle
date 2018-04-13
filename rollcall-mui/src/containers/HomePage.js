import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { withCurrentUser } from "../graphql";

// This component is the initial redirection that switches to the right page
// based on the current user.
class Home extends React.Component {
  render() {
    const { currentUser } = this.props;

    var target = "/dashboard";
    if (!currentUser) {
      target = "/signin";
    } else if (/teacher/.test(currentUser.roles)) {
      target = "/attendance";
    } else if (/staff/.test(currentUser.roles)) {
      target = "/students";
    }

    console.log("home page redirect to", target);

    return <Redirect to={target} />;
  }
}

Home.propTypes = {
  currentUser: PropTypes.object
};

export default withCurrentUser(Home);
