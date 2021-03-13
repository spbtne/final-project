import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import PokemonInfo from "../../components/PokemonInfo/PokemonInfo";
import { cardsItem, state_I } from "../../utils/interfaces";

import "./CurrentPokemon.scss";

const CurrentPokemon = (): JSX.Element => {
    const valueOfCurrentPokemon: cardsItem = useSelector(
        (state: state_I) => state.currentPokemon
    );
    if (valueOfCurrentPokemon.id === 0) {
        return <Redirect exact from="/currentPokemon" to="/main" />;
    } else {
        return (
            <main className="currentPokemon-wrapper">
                <PokemonInfo
                    pokemonsName={valueOfCurrentPokemon.name}
                    pokemonId={valueOfCurrentPokemon.id}
                />
            </main>
        );
    }
};

export default CurrentPokemon;
