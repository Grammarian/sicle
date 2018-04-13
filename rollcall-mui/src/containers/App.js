import React from "react";
import { history } from "../basics";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import CssBaseline from "material-ui/CssBaseline";
import { Client } from "../graphql";

import "../assets/app.css";

import topRoutes from "../routes/topLevel.js";

const App = () => (
  <div>
    <CssBaseline />
    <Client>
      <Router history={history}>
        <Switch>
          {topRoutes.map((route, idx) => {
            if (!!route.redirect) {
              return <Redirect from={route.path} to={route.redirect} key={idx} />;
            }
            return <Route path={route.path} component={route.component} key={idx} exact={!!route.exact} />;
          })}
        </Switch>
      </Router>
    </Client>
  </div>
);

export default App;
