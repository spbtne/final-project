import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./pages/MainPage/MainPage";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.scss";

import { createStore } from "redux";
import reducer from "./reducers/reducer";

import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <MainPage />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
