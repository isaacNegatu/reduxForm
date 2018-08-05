import React, { Component } from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";

class FinalUnflledCheck extends Component {

    

  render() {
    return (
      <Dialog
        open={this.props.dialogOpen}
        onClose={this.props.handleRedirect}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Wait"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The {this.props.unfilledField} field is empty. Please choose a number before submitting.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleRedirect} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default FinalUnflledCheck;
