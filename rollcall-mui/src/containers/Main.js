import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import { withStyles } from "material-ui";

import appStyle from "../styles/appStyle.js";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import centralRoutes from "../routes/centralContent";

import image from "../assets/sidebar-2.jpg";
import logo from "../assets/logo.png";
import { themed } from "../basics";
import { withCurrentUser } from "../graphql";

class Main extends React.Component {
  state = {
    drawerOpen: false
  };
  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={centralRoutes.filter(x => !!x.sidebarName)}
          logoText={"Roll Call"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.drawerOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header routes={centralRoutes} handleDrawerToggle={this.handleDrawerToggle} {...rest} />
          <div className={classes.content}>
            <div className={classes.container}>
              <Switch>
                {centralRoutes.map((route, key) => <Route path={route.path} component={route.component} key={key} />)}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  currentUser: PropTypes.object
};

export default withStyles(appStyle)(withCurrentUser(themed(Main)));
