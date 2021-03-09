import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.scss";
import * as PokemonsData from "./public/db.json";

type PokemonsData = {
    pokemons: {
        name: string;
        id: number;
    }[];
};

ReactDOM.render(
    <React.StrictMode>
        <MainPage {...PokemonsData} />
    </React.StrictMode>,
    document.getElementById("root")
);
