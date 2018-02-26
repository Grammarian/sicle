import React from "react";

// Theme
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Reboot from "material-ui/Reboot";
// import { deepOrange500 } from "material-ui/colors";
// import createPalette from "material-ui/styles/createPalette";
// import createTypography from "material-ui/styles/createTypography";

// Styles
// const styles = {
//   container: {}
// };

// Theme
const theme = createMuiTheme({
  palette: {
    type: "light"
  },
  typography: {
    fontFamily: "'Open Sans',serif,Roboto,'Helvetica Neue',Arial,sans-serif"
  }
});

const Theme = props => (
  <MuiThemeProvider theme={theme}>
    <Reboot />
    {props.children}
  </MuiThemeProvider>
);

export default Theme;
