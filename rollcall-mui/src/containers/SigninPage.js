import React, { Component } from "react";
import { withAuth } from "../auth";

class SigninPage extends Component {
  componentDidMount() {
    console.log("mounted signin page");
    console.log(this.props);
    this.props.auth.login();
  }
  render() {
    // TODO -- This should show something neutral, but branded
    return <p>sigin page</p>;
  }
}

export default withAuth(SigninPage);
