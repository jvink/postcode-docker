import React from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { render } from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./containers/App";
import address from "./reducers";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(address, composeWithDevTools(
    applyMiddleware(thunk),
  ));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
