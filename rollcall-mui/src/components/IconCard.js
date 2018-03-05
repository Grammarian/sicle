import React from "react";
import { withStyles, Card, CardContent, CardHeader } from "material-ui";
import PropTypes from "prop-types";

import iconCardStyle from "../styles/iconCardStyle";

function IconCard({ ...props }) {
  const { classes, title, iconColor, children, ...rest } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root: classes.cardHeader + " " + classes[iconColor + "CardHeader"],
          avatar: classes.cardAvatar
        }}
        avatar={<props.icon className={classes.cardIcon} />}
      />
      <CardContent className={classes.cardContent}>
        <div className={classes.cardTitle}>{title}</div>
        <div className={classes.cardBody}>{children}</div>
      </CardContent>
    </Card>
  );
}

IconCard.defaultProps = {
  iconColor: "purple",
  statIconColor: "gray"
};

IconCard.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.func.isRequired,
  iconColor: PropTypes.oneOf(["orange", "green", "red", "blue", "purple"]),
  title: PropTypes.node
};

export default withStyles(iconCardStyle)(IconCard);
