import React from "react";

import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

const Theme = props => {
  const { children, typography = {}, ...rest } = props;
  const theme = createMuiTheme({
    palette: {
      type: "light"
    },
    typography: {
      fontFamily: "'Open Sans',Roboto,'Helvetica Neue',Arial,sans-serif",
      fontSize: "18px",
      ...typography
    },
    ...rest
  });
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

export default Theme;
