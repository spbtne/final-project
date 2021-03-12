import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import CurrentPokemon from "./CurrentPokemon/CurrentPokemon";
import MainPage from "./MainPage/MainPage";

const App = (): JSX.Element => {
    return (
        <Router>
            <div className="page-wrapper">
                <Navigation />
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
