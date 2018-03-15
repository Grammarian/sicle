import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Loading from "../components/Loading";
import Error from "../components/Error";
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
    if (this.props.data.loading) {
      return <Loading />;
    }
    if (this.props.data.error) {
      return <Error data={this.props.data} />;
    }
    const {
      _allClpStudentsMeta: { count: studentCount },
      _allClpSchoolsMeta: { count: schoolCount },
      _allClpTeachersMeta: { count: teacherCount },
      _allClpLocationsMeta: { count: locationCount }
    } = this.props.data;
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Accessibility}
              iconColor="orange"
              title="Students In Class"
              description={studentCount}
              statIcon={DateRange}
              statText="Last week"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Store}
              iconColor="green"
              title="Campuses Used"
              description={locationCount}
              statIcon={DateRange}
              statText="Last week"
            />
          </ItemGrid>

          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={School}
              iconColor="blue"
              title="Teachers"
              description={teacherCount}
              statIcon={Update}
              statText="Last week"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={InfoOutline}
              iconColor="red"
              title="Schools"
              description={schoolCount}
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
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

const EntityCounts = gql`
  query EntityCounts {
    _allClpStudentsMeta {
      count
    }
    _allClpSchoolsMeta {
      count
    }
    _allClpTeachersMeta {
      count
    }
    _allClpLocationsMeta {
      count
    }
  }
`;

export default graphql(EntityCounts)(withStyles(dashboardStyle)(Dashboard));
