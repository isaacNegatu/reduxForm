import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

let feedBackInitialState = {
  feeling: "",
  understanding: "",
  support: "",
  comments: ""
};

let feedbackReducer = (state = feedBackInitialState, action) => {
  if (action.type.match(/^@@redux/i) || action.type === 'CLEAR_INPUT') {
    return feedBackInitialState;
  } else {
    return { ...state, [action.type]: action.payload };
  }
};

let theStore = createStore(feedbackReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
