import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Reboot from "material-ui/Reboot";

import "../assets/app.css";

import topRoutes from "../routes/topLevel.js";

const hist = createBrowserHistory();

const App = () => (
  <div>
    <Reboot />
    <Router history={hist}>
      <Switch>
        {topRoutes.map((route, idx) => {
          return <Route path={route.path} component={route.component} key={idx} />;
        })}
      </Switch>
    </Router>
  </div>
);

export default App;
