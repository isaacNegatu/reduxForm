import React, { Component } from "react";
import { Button } from "@material-ui/core";

class PageFive extends Component {
  handleClick = () => {
    this.props.history.push("/1");
  };
  
  render() {
    return (
      <div>
        <h3>Thank you for your feedback </h3>
        <Button variant="outlined" color="primary" onClick={this.handleClick}>
          Leave New Feedback
        </Button>
        <br />
      </div>
    );
  }
}

export default PageFive;
