import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";
import equal from 'fast-deep-equal'


const styles = {
  root: {
    flexGrow: 1,
    padding: "0em 10em"
  }
};

class FormProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: 0
    };
  }

  componentDidMount = () => {
    this.updateCompleted();
  };

  componentDidUpdate = (prevProps) => {
    if (!equal(this.props.feedBackState, prevProps.feedBackState)) {
        this.setState({
            completed : 0
        })
      this.updateCompleted();
    }
  }
  updateCompleted = () => {
    
    Object.keys(this.props.feedBackState).forEach(key => {
      if (this.props.feedBackState[key] !== "") {          
        this.setState({
            completed : this.state.completed + 25
        })
      }
    });
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <LinearProgress variant="determinate" value={this.state.completed} />
        <br />
      </div>
    );
  }
}
const mapStateToProgress = reduxState => {
  return { feedBackState: reduxState };
};

const styledPage = withStyles(styles)(FormProgress);
export default connect(mapStateToProgress)(styledPage);
