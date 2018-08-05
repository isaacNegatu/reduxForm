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

class PageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      understanding: this.props.feedBackState.understanding,
      dialogOpen: false
    };
  }

  handleChange = e => {
    this.setState({
      understanding: e.target.value
    });
    console.log(e.target.value);
  };

  handleNext = () => {
      if(this.state.understanding !== ''){
        this.props.dispatch({
            type: "understanding",
            payload: this.state.understanding
          });
          this.props.history.push("/3");
      }else{
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
          <FormLabel component="legend">
            How well are you understanding the concept?
          </FormLabel>
          <RadioGroup
            name="understanding"
            value={this.state.understanding}
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

const styledPage = withStyles(styles)(PageTwo);
export default connect(mapStateToFeedback)(styledPage);
