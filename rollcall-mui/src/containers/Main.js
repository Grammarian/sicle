import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

import { withStyles } from "material-ui";

import appStyle from "../styles/appStyle.js";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import appRoutes from "../routes/rollcallApp.js";

import image from "../assets/sidebar-2.jpg";
import logo from "../assets/logo.png";

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
          routes={appRoutes}
          logoText={"Roll Call"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.drawerOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header routes={appRoutes} handleDrawerToggle={this.handleDrawerToggle} {...rest} />
          <div className={classes.content}>
            <div className={classes.container}>
              <Switch>
                {appRoutes.map((prop, key) => {
                  if (prop.redirect) return <Redirect from={prop.path} to={prop.to} key={key} />;
                  return <Route path={prop.path} component={prop.component} key={key} />;
                })}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(Main);
