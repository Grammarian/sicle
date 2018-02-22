import React from "react";

// Theme
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Reboot from "material-ui/Reboot";
import { deepOrange500 } from "material-ui/colors";

// Styles
const styles = {
  container: {}
};

// Theme
const muiTheme = createMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

const Theme = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={styles.container}>
      <Reboot />
      {props.children}
    </div>
  </MuiThemeProvider>
);

export default Theme;
