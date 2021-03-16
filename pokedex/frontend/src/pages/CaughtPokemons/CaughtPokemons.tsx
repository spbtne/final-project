import React from "react";
import { useSelector } from "react-redux";

import { state_I } from "../../utils/interfaces";

import PokemonCard from "../../components/PokemonCard/PokemonCard";

import "./CaughtPokemons.scss";

const CaughtPokemons = (): JSX.Element => {
    const caughtPokemons = useSelector(
        (state: state_I) => state.caughtPokemons
    );

    if (caughtPokemons.length === 0) {
        return (
            <div className="caughtPokemons-wrapper">
                <div className="caughtPokemons__title-wrapper">
                    <h1>No caught pokemons yet</h1>
                </div>
            </div>
        );
    }
    return (
        <div className="caughtPokemons-wrapper">
            <ul className="allPokemons__list">
                {caughtPokemons.map((item) => {
                    if (item) {
                        return (
                            <PokemonCard
                                name={item.name}
                                id={item.id}
                                isFree={item.isFree}
                                key={item.id.toString()}
                            />
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default CaughtPokemons;
