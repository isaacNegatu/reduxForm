import React, { Component } from "react";
import "./App.css";

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import PageOne from "../pageOne/pageOne";
import PageTwo from "../pageTwo/pageTwo";
import PageThree from "../pageThree/pageThree";
import PageFour from "../pageFour/pageFour";
import PageFive from "../pageFive/pageFive";

import Admin from '../admin/admin';

import NotFound from '../notFound/notFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
          <Switch>
            <Redirect exact from="/" to="/1" />
            <Route exact path="/1" component={PageOne} />
            <Route exact path='/2' component={PageTwo} />
            <Route exact path='/3' component={PageThree} />
            <Route exact path='/4' component={PageFour} />
            <Route exact path='/5' component={PageFive} />

             <Route exact path='/admin' component={Admin} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
