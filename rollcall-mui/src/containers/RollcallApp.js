import React, { Component } from "react";

import { Client } from "../graphql";
import { Theme } from "../basics";
import Main from "./Main";

class RollcallApp extends Component {
  render() {
    return (
      <Client>
        <Theme>
          <Main {...this.props} />
        </Theme>
      </Client>
    );
  }
}

export default RollcallApp;
