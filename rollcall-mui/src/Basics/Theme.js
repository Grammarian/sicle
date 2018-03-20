import React from "react";

import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

const theme = createMuiTheme({
  palette: {
    type: "light"
  },
  typography: {
    fontFamily: "'Open Sans',Roboto,'Helvetica Neue',Arial,sans-serif",
    fontSize: "18px"
  }
});

const Theme = props => <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;

export default Theme;
