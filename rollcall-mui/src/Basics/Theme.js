import React from "react";

import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Reboot from "material-ui/Reboot";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: {
    fontFamily:
      "Roboto,'Open Sans',serif,Roboto,'Helvetica Neue',Arial,sans-serif"
  }
});

const Theme = props => (
  <MuiThemeProvider theme={theme}>
    <Reboot />
    {props.children}
  </MuiThemeProvider>
);

export default Theme;
