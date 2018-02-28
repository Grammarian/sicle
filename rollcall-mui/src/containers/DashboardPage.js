import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
import {
  School,
  Store,
  InfoOutline,
  Hearing,
  DateRange,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "material-ui-icons";
import { withStyles, Grid } from "material-ui";

import { Heading } from "../basics";
import StatsCard from "../components/StatsCard";
import ItemGrid from "../components/ItemGrid";

import dashboardStyle from "../styles/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Accessibility}
              iconColor="orange"
              title="Students In Class"
              description="27,300"
              statIcon={DateRange}
              statText="Last week"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Store}
              iconColor="green"
              title="Campuses Used"
              description="918"
              statIcon={DateRange}
              statText="Last week"
            />
          </ItemGrid>

          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={School}
              iconColor="blue"
              title="Teachers"
              description="2,530"
              statIcon={Update}
              statText="Last week"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={InfoOutline}
              iconColor="red"
              title="Discipline Issues"
              description="75"
              statIcon={Hearing}
              statText="Inferred from noise level"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <Heading>Add some charts</Heading>
        </Grid>
        <Grid container>
          <Heading>Add some other charts</Heading>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
