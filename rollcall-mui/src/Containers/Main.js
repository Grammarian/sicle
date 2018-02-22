import React, { Component } from "react";
import PageHeader from "../Components/PageHeader";
import PageFooter from "../Components/PageFooter";
import Overview from "../Containers/Overview";
import OldMain from "../Containers/OldMain";

import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="react-root">
          <PageHeader />
          <div className="body-content">
            <Route exact path="/" component={Overview} />
            {/* <Route path="/projects" component={Projects} /> */}
            {/* <Route path="/project/:id" component={ProjectAssessments} />
            <Route path="/assessment/:id" component={AssessmentPage} /> */}
            <Route path="/old" component={OldMain} />
          </div>
          <PageFooter />
        </div>
      </Router>
    );
  }
}

export default Main;