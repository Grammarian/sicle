import React from "react";
import { withAuth } from "../auth";
import { Redirect } from "react-router-dom";
import { CurrentUserQuery } from "../graphql";

function withCurrentUser(WrappedComponent) {
  class WithCurrentUser extends React.Component {
    render() {
      const { auth } = this.props;
      if (!auth.isAuthenticated()) {
        console.log("HERE");
        return <Redirect to="/signin" />;
      }
      return (
        <CurrentUserQuery>
          {x => {
            console.log("CurrentUserQuery", JSON.stringify(x));
            // TODO - This is too abrupt
            if (!x.user) {
              return <Redirect to="/signin" />;
            }
            return <WrappedComponent currentUser={x.user} {...this.props} />;
          }}
        </CurrentUserQuery>
      );
    }
  }
  WithCurrentUser.displayName = `WithCurrentUser(${getDisplayName(WrappedComponent)})`;
  return withAuth(WithCurrentUser);
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withCurrentUser;
