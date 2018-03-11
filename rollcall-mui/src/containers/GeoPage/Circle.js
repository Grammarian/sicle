import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";

const style = {
  borderStyle: "solid",
  borderWidth: "3px"
};
class Circle extends React.Component {
  render() {
    const { key, color = "red", background = "rgba(255, 0, 0, 0.3)", text = "?", width = 18 } = this.props;
    const widthAsPx = width + "px";
    const effectiveStyle = Object.assign({}, style, {
      color,
      background,
      width: widthAsPx,
      height: widthAsPx,
      borderRadius: widthAsPx
    });
    console.log(effectiveStyle);
    return <div key={key} style={effectiveStyle} />;
  }
}

export default Circle;
