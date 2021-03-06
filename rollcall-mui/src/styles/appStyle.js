// ##############################
// // // App styles
// #############################

import { drawerWidth, transition, container } from "./default.js";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
    background: "#EEE"
  },
  content: {
    marginTop: "70px",
    padding: "20px 15px",
    minHeight: "calc(100% - 123px)"
  },
  container
});

export default appStyle;
