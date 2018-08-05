import React, { Component } from "react";
import axios from "axios";

import { Button, TextField, FormControl, withStyles } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

import { connect } from "react-redux";

import FinalUnfilledCheck from "../finalUnfilledCheck/finalUnfilledCheck";

let styles = {
  formControl: {
    width: "30em"
  }
};

class PageFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      dialogOpen: false,
      unfilledField: ""
    };
  }

  handleChange = e => {
    this.setState({
      comments: e.target.value
    });
  };

  handleSubmit = () => {
    this.updateRedux().then(res => {
      let feedback = this.props.feedBackState;
      this.checkEmpty(feedback)
        .then(res => {
            this.props.dispatch({
                type : 'CLEAR_INPUT'
            });

            axios
            .post("/api/feedback", feedback)
            .then(res => {
              this.props.history.push("/5");
            })
            .catch(err => console.log(err));
        }).catch(err => console.log('something was empty'))
    });
  };

  checkEmpty = (feedback)=> {
    let flag = false;
    Object.keys(feedback).forEach(key => {
        if (feedback[key] === "" && key !== "comments") {
            flag = true;
          this.setState({
            dialogOpen: true,
            unfilledField: key.toString()
          });
        }
      });
      if(!flag){
        return Promise.resolve();
      }else{
        return Promise.reject();
      }
      
  }

  handleRedirect = key => {
      this.setState({
          dialogOpen : false
      })
      if (key === 'feeling') {this.props.history.push('/1');}
      else if (key === 'understanding') {this.props.history.push('/2')}
      else if (key === 'support') {this.props.history.push('/3')}
  };

  updateRedux = () => {
    this.props.dispatch({
      type: "comments",
      payload: this.state.comments
    });
    return Promise.resolve();
  };

  render() {
    return (
      <div>
        <FormControl className={this.props.classes.formControl}>
          <TextField
            label="Any comments you want to leave?"
            multiline
            rows="5"
            margin="normal"
            onChange={this.handleChange}
          />
          <br />
          <Button
            onClick={this.handleSubmit}
            type="submit"
            variant="outlined"
            color="primary"
          >
            Submit <DoneIcon />
          </Button>
        </FormControl>

        <FinalUnfilledCheck
          dialogOpen={this.state.dialogOpen}
          unfilledField={this.state.unfilledField}
          handleRedirect={() => this.handleRedirect(this.state.unfilledField)}
        />
      </div>
    );
  }
}

const mapStateToFeedback = reduxState => {
  return { feedBackState: reduxState };
};

const pageWithStyle = withStyles(styles)(PageFour);
export default connect(mapStateToFeedback)(pageWithStyle);
