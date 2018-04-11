import React from "react";

class Error extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <h2>Oops. Something bad happened</h2>
        <p>{this.props.data.error.message}</p>
      </div>
    );
  }
}

export default Error;
