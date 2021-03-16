import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import PokemonInfo from "../../components/PokemonInfo/PokemonInfo";
import { card_I, state_I } from "../../utils/interfaces";

import "./CurrentPokemon.scss";

const CurrentPokemon = (): JSX.Element => {
    const valueOfCurrentPokemon: card_I = useSelector(
        (state: state_I) => state.currentPokemon
    );
    if (valueOfCurrentPokemon.id === 0) {
        return <Redirect exact from="/currentPokemon" to="/main" />;
    } else {
        return (
            <main className="currentPokemon-wrapper">
                <PokemonInfo
                    name={valueOfCurrentPokemon.name}
                    id={valueOfCurrentPokemon.id}
                    isFree={valueOfCurrentPokemon.isFree}
                />
            </main>
        );
    }
};

export default CurrentPokemon;
