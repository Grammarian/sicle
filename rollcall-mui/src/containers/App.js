import React from "react";
import { history } from "../basics";
import { Router, Route, Switch } from "react-router-dom";
import CssBaseline from "material-ui/CssBaseline";

import "../assets/app.css";

import topRoutes from "../routes/topLevel.js";

const App = () => (
  <div>
    <CssBaseline />
    <Router history={history}>
      <Switch>
        {topRoutes.map((route, idx) => {
          return <Route path={route.path} component={route.component} key={idx} />;
        })}
      </Switch>
    </Router>
  </div>
);

export default App;
