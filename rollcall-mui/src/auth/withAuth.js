import React from "react";
import Auth from "./Auth";

const auth = new Auth();

function withAuth(WrappedComponent) {
  class WithAuth extends React.Component {
    render() {
      return <WrappedComponent auth={auth} {...this.props} />;
    }
  }
  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;
  return WithAuth;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAuth;
