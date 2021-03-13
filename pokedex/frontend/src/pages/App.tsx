import React from "react";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import { cardsItem, state_I } from "../utils/interfaces";
import CurrentPokemon from "./CurrentPokemon/CurrentPokemon";
import MainPage from "./MainPage/MainPage";

const App = (): JSX.Element => {
    const valueOfCurrentPokemon: cardsItem = useSelector(
        (state: state_I) => state.currentPokemon
    );
    let isDisabled = true;
    if (valueOfCurrentPokemon.id === 0) {
        isDisabled = true;
    } else {
        isDisabled = false;
    }
    return (
        <Router>
            <div className="page-wrapper">
                <Navigation isDisabled={isDisabled} />
                <Switch>
                    <Redirect exact from="/" to="/main" />
                    <Route path="/main" component={MainPage} />
                    <Route path="/currentPokemon" component={CurrentPokemon} />
                    <Route
                        path="/catchedPokemons"
                        render={() => <h1>Cacthed</h1>}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
