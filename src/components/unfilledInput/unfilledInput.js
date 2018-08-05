import React, { Component } from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";

class UnfilledInput extends Component {

    

  render() {
    return (
      <Dialog
        open={this.props.dialogOpen}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Wait"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can't continue without any input!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default UnfilledInput;
