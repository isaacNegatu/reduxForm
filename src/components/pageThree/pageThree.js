import React, { Component } from "react";

import {
  FormControl,
  Button,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { withStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

import UnfilledInput from "../unfilledInput/unfilledInput";

let styles = {
  formControl: {
    width: "30em"
  },
  radios: {
    display: "inline-block"
  }
};

class PageThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      support: this.props.feedBackState.support,
      dialogOpen : false
    };
  }

  handleChange = e => {
    this.setState({
      support: e.target.value
    });
    console.log(e.target.value);
  };

  handleNext = () => {
    if (this.state.support !== "") {
      this.props.dispatch({
        type: "support",
        payload: this.state.support
      });
      this.props.history.push("/4");
    } else {
      this.setState({
        dialogOpen: true
      });
    }
  };

  handleClose = () => {
    this.setState({
      dialogOpen: false
    });
  };
  render() {
    return (
      <div>
        <FormControl className={this.props.classes.formControl}>
          <FormLabel component="legend">How well are you supported?</FormLabel>
          <RadioGroup
            name="support"
            value={this.state.support}
            onChange={this.handleChange}
            className={this.props.classes.radios}
          >
            {[...Array(5)].map((x, index) => {
              return (
                <FormControlLabel
                  key={(index + 1).toString()}
                  value={(index + 1).toString()}
                  control={<Radio />}
                  label={(index + 1).toString()}
                />
              );
            })}
          </RadioGroup>
          <br />
          <Button
            onClick={this.handleNext}
            type="submit"
            variant="outlined"
            color="primary"
          >
            Next <NavigateNextIcon />
          </Button>
        </FormControl>

        <UnfilledInput
          dialogOpen={this.state.dialogOpen}
          handleClose={() => this.handleClose()}
        />
      </div>
    );
  }
}

const mapStateToFeedback = reduxState => {
    return { feedBackState: reduxState };
  };

const styledPage = withStyles(styles)(PageThree);
export default connect(mapStateToFeedback)(styledPage);
