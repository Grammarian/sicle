import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import { SubHeading, BodyText } from "../../basics";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  popup: {
    pointerEvents: "none"
  },
  heading: {
    fontWeight: "700"
  }
});

class MarkerPopup extends React.Component {
  render() {
    const { classes, model } = this.props;
    return (
      <div
        className={classes.popup}
        classes={{
          paper: classes.paper
        }}
      >
        <SubHeading className={classes.heading}>{model.name}</SubHeading>
        <BodyText>{model.students || "0"} students</BodyText>
      </div>
    );
  }
}

MarkerPopup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MarkerPopup);
