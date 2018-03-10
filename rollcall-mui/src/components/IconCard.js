import React from "react";
import { withStyles, Card, CardContent, CardHeader } from "material-ui";
import PropTypes from "prop-types";

import iconCardStyle from "../styles/iconCardStyle";

function IconCard({ ...props }) {
  const { classes, top, iconColor, children } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.cardTop}>
        <CardHeader
          classes={{
            root: classes.cardHeader + " " + classes[iconColor + "CardHeader"],
            avatar: classes.cardAvatar
          }}
          avatar={<props.icon className={classes.cardIcon} />}
        />
        <div className={classes.cardTopContent}>{top}</div>
        <div className={classes.cardTopFinish} />
      </div>

      <CardContent className={classes.cardContent}>
        <div className={classes.cardBody}>{children}</div>
      </CardContent>
    </Card>
  );
}

IconCard.defaultProps = {
  iconColor: "purple"
};

IconCard.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.func.isRequired,
  iconColor: PropTypes.oneOf(["orange", "green", "red", "blue", "purple"]),
  title: PropTypes.node
};

export default withStyles(iconCardStyle)(IconCard);
