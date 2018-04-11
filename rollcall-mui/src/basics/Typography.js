import React from "react";

import Typography from "material-ui/Typography";

export const Heading = ({ children, ...rest }) => (
  <Typography variant="title" {...rest}>
    {children}
  </Typography>
);
export const SubHeading = ({ children, ...rest }) => (
  <Typography variant="subheading" {...rest}>
    {children}
  </Typography>
);
export const BodyText = ({ children, ...rest }) => (
  <Typography variant="body2" {...rest}>
    {children}
  </Typography>
);
export const LightBodyText = ({ children, ...rest }) => (
  <Typography variant="body1" {...rest}>
    {children}
  </Typography>
);
