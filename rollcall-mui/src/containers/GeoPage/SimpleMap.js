import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { withStyles, Grid } from "material-ui";

import Circle from "./Circle";

const GoogleMapsApiKey = "AIzaSyDKWjy0uGL3y8aN0ZPlxnw3CrCG_wCP5uQ";

const schools = [
  {
    name: "Ashfield Public School",
    lat: -33.8894762,
    lng: 151.1286933,
    students: 400
  },
  {
    name: "Bankstown Senior College",
    lat: -33.9302992,
    lng: 151.0217703,
    students: 121
  },
  {
    name: "Illawarra Sports HS",
    lat: -34.480332,
    lng: 150.8536687,
    students: 12
  }
];
const styles = {
  map: {
    width: "100%",
    height: "600px",
    margin: 8,
    padding: 0,
    position: "relative"
  }
};

const UgleReactComponent = ({ text }) => (
  <div
    style={{
      position: "relative",
      color: "white",
      background: "red",
      height: 40,
      width: 60,
      top: -20,
      left: -30
    }}
  >
    {text}
  </div>
);
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component {
  state = {
    center: { lat: -33.8, lng: 150.8202351 },
    zoom: 9
  };

  onBoundsChange = (center, zoom, bounds, marginBounds) => {
    console.log("this.props.onBoundsChange", center, zoom, bounds, marginBounds);
    this.setState({ center, zoom });
  };

  onChildClick = (key, childProps) => {
    console.log("this.props.onChildClick", key, childProps);
  };

  onChildMouseEnter = (key /*, childProps */) => {
    console.log("this.props.onChildMouseEnter", key);
  };

  onChildMouseLeave = (/* key, childProps */) => {
    console.log("this.props.onChildMouseLeave");
  };

  calcWidthForPopulation = pop => {
    return Math.log(pop) * 10;
  };

  render() {
    const { classes } = this.props;
    const { center, zoom } = this.state;
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: GoogleMapsApiKey }}
        style={styles.map}
        defaultCenter={center}
        defaultZoom={zoom}
        onBoundsChange={this.onBoundsChange}
        onChildMouseEnter={this.onChildMouseEnter}
        onChildMouseLeave={this.onChildMouseLeave}
      >
        {schools.map((x, i) => (
          <Circle
            key={i}
            lat={x.lat}
            lng={x.lng}
            zoom={zoom}
            text={x.name}
            width={this.calcWidthForPopulation(x.students)}
          />
        ))}
      </GoogleMapReact>
    );
  }
}

SimpleMap.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMap);
