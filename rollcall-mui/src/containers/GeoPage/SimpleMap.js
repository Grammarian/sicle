import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { withStyles, Grid } from "material-ui";

import Circle from "./Circle";
import MarkerPopup from "./MarkerPopup";
import Locations from "../../data/locations";

const GoogleMapsApiKey = "AIzaSyDKWjy0uGL3y8aN0ZPlxnw3CrCG_wCP5uQ";

const styles = {
  map: {
    width: "100%",
    height: "600px",
    margin: 8,
    padding: 0,
    position: "relative"
  }
};

// const UgleReactComponent = ({ text }) => (
//   <div
//     style={{
//       position: "relative",
//       color: "white",
//       background: "red",
//       height: 40,
//       width: 60,
//       top: -20,
//       left: -30
//     }}
//   >
//     {text}
//   </div>
// );
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component {
  state = {
    center: { lat: -33.8, lng: 150.8202351 },
    zoom: 9
  };

  onChange = ({ center, zoom, bounds, ...other }) => {
    console.log("this.props.onChange", center, zoom, bounds, other);
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

  calcWidthForPopulation = (pop, zoom) => {
    // zoom is documented https://developers.google.com/maps/documentation/javascript/tutorial#zoom-levels
    // 1: World
    // 5: Landmass/continent
    // 10: City
    // 15: Streets
    // 20: Buildings
    const zoomFactors = [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0, // 0-5
      1.0,
      2.0,
      3.0,
      4.0,
      7.5, // 6-10
      10,
      12,
      13,
      14,
      15, // 11-15
      16,
      17,
      18,
      19,
      20 // 16-20
    ];
    const minWidth = 10;
    if (!pop) {
      return minWidth;
    }
    if (zoom < 6) {
      return minWidth;
    }
    const factor = zoomFactors[zoom] || 1;
    return Math.max(minWidth, Math.log(pop) * factor);
  };

  render() {
    const { classes } = this.props;
    const { center, zoom } = this.state;
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: GoogleMapsApiKey }}
        style={styles.map}
        center={center}
        zoom={zoom}
        onChange={this.onChange}
        onChildMouseEnter={this.onChildMouseEnter}
        onChildMouseLeave={this.onChildMouseLeave}
      >
        {Locations.map(
          (x, i) =>
            x.found && (
              <Circle
                key={i}
                lat={x.lat}
                lng={x.lng}
                zoom={zoom}
                width={this.calcWidthForPopulation(x.students, zoom)}
              >
                <MarkerPopup model={x} />
              </Circle>
            )
        )}
      </GoogleMapReact>
    );
  }
}

SimpleMap.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMap);
