import React, { Component } from "react";
import axios from "axios";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  withStyles
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import OutlinedFlagIcon from "@material-ui/icons/OutlinedFlag";
import FlagIcon from '@material-ui/icons/Flag';

let styles = {
    flagged :  {
        color : 'red'
    },
    container : {
        margin : '0em 14em'
    }
  };
  
class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedbacks: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/feedback")
      .then(res => {
        console.log(res.data);
        this.setState({
          feedbacks: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFeedback = feedback => {
    console.log(feedback);
    axios
      .delete(`/api/feedback/${feedback.id}`)
      .then(() => this.componentDidMount())
      .catch(err => console.log(err));
  };

  flagFeedback = feedback => {

      axios.put(`/api/feedback/${feedback.id}`)
        .then(() =>  this.componentDidMount())
        .catch(err => console.log(err))
  }

  render() {
    let tableRows = this.state.feedbacks.map(feedback => {

        let flagIcon;
        if(feedback.flagged){
            flagIcon = <FlagIcon className={this.props.classes.flagged}/>
        }else {
            flagIcon = <OutlinedFlagIcon />
        }

      return (
        <TableRow key={feedback.id}>
          <TableCell>
            <Button onClick={() => this.flagFeedback(feedback)}>
              {flagIcon}
            </Button>
          </TableCell>
          <TableCell component="th" scope="row">
            {feedback.feeling}
          </TableCell>
          <TableCell>{feedback.understanding}</TableCell>
          <TableCell>{feedback.support}</TableCell>
          <TableCell>{feedback.comments}</TableCell>
          <TableCell>
            <Button onClick={() => this.deleteFeedback(feedback)}>
              <DeleteIcon />
            </Button>
          </TableCell>
        </TableRow>
      );
    });

    return (
      <div className={this.props.classes.container}>
        <h3>Feedbacks </h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell>Feeling</TableCell>
              <TableCell>Comprehension</TableCell>
              <TableCell>Support</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </div>
    );
  }
}

const pageWithStyle = withStyles(styles)(Admin);

export default pageWithStyle;
