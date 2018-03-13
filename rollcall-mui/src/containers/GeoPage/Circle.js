import React from "react";
import PropTypes from "prop-types";
import { withStyles, Popover, Typography } from "material-ui";

const markerStyle = {
  borderStyle: "solid",
  borderWidth: "1px",
  position: "relative"
};

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  popover: {
    pointerEvents: "none"
  },
  popperClose: {
    pointerEvents: "none"
  }
});

class Circle extends React.Component {
  state = {
    anchorEl: null
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.target });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const {
      classes,
      children,
      key,
      color = "rgba(255, 0, 0, 0.5)",
      background = "rgba(255, 0, 0, 0.2)",
      width = 18
    } = this.props;
    const { anchorEl } = this.state;
    const open = !!anchorEl;
    const widthAsPx = width + "px";
    const halfOffsetAsPx = 0 - width / 2 + "px";
    const effectiveStyle = Object.assign({}, markerStyle, {
      color,
      background,
      top: halfOffsetAsPx,
      left: halfOffsetAsPx,
      width: widthAsPx,
      height: widthAsPx,
      borderRadius: widthAsPx
    });
    return (
      <div>
        <div
          key={key}
          style={effectiveStyle}
          onMouseOver={this.handlePopoverOpen}
          onMouseOut={this.handlePopoverClose}
        />

        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
        >
          {children}
          {!children && <Typography>Missing children property.</Typography>}
        </Popover>
      </div>
    );
  }
}

export default withStyles(styles)(Circle);
