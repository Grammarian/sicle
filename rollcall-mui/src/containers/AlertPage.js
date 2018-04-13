import React, { Component } from "react";
import { withStyles } from "material-ui";

import { Theme, BodyText } from "../basics";
import TitleBar from "../components/TitleBar";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";

const pageStyle = {
  container: {
    maxWidth: "640px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "80px"
  }
};

const typography = {
  title: {
    fontWeight: "900",
    padding: "12px 0px"
  },
  subheading: {
    fontWeight: "700",
    padding: "12px 0px"
  },
  body2: {
    paddingBottom: "16px"
  }
};

class AlertPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Theme typography={typography}>
        <TitleBar>Rollcall</TitleBar>
        <div className={classes.container}>
          <BodyText>Your session has expired</BodyText>

          <Button component={Link} to="/signin" variant="raised" color="primary">
            Login
          </Button>
        </div>
      </Theme>
    );
  }
}

export default withStyles(pageStyle)(AlertPage);
