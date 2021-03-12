import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.scss";

import { createStore } from "redux";
import reducer from "./reducers/reducer";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./pages/App";

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
