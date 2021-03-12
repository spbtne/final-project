import React from "react";
import PokemonInfo from "../../components/PokemonInfo/PokemonInfo";

import "./CurrentPokemon.scss";

const CurrentPokemon = (): JSX.Element => {
    return (
        <main className="currentPokemon-wrapper">
            <PokemonInfo pokemonsName={"Chi"} pokemonId={1} />
        </main>
    );
};

export default CurrentPokemon;
59;
