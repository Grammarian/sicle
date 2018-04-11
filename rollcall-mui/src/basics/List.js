import React from "react";

import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List";

export const MuiList = ({ children, ...rest }) => (
  <List {...rest}>{children}</List>
);
export const MuiListItem = ({
  text,
  secondary,
  icon,
  action,
  children,
  ...rest
}) => (
  <ListItem {...rest}>
    {!!icon && <ListItemIcon>{icon}</ListItemIcon>}
    {!!text && <ListItemText primary={text} secondary={secondary} />}
    {!!action && <ListItemSecondaryAction>{action}</ListItemSecondaryAction>}
    {children}
  </ListItem>
);
