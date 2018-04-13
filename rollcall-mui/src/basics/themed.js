import React from "react";
import { Theme } from "../basics";

function themed(WrappedComponent) {
  class Themed extends React.Component {
    render() {
      return (
        <Theme>
          <WrappedComponent {...this.props} />
        </Theme>
      );
    }
  }
  Themed.displayName = `Themed(${getDisplayName(WrappedComponent)})`;
  return Themed;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default themed;
