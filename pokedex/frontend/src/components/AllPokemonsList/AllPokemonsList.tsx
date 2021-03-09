import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

type CardArray = {
    name: string;
    id: number;
}[];

type PokemonsData = {
    pokemons: {
        name: string;
        id: number;
    }[];
};

const pokemonsOnPage: CardArray = [];
const AllPokemonsList = (props: PokemonsData): JSX.Element => {
    const AvaliableAmountOfPokemonsOnPage =
        Math.floor(innerHeight / 400) * Math.floor(innerWidth / 200) * 2;

    const loadPokemons = () => {
        const currentAmountOfPokemons = pokemonsOnPage.length;
        for (let i = 0; i < AvaliableAmountOfPokemonsOnPage; i++) {
            pokemonsOnPage.push({
                name: props.pokemons[i + currentAmountOfPokemons].name,
                id: props.pokemons[i + currentAmountOfPokemons].id,
            });
        }
    };

    if (pokemonsOnPage.length === 0) {
        loadPokemons();
    }

    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        loadPokemons();
    });

    return (
        <>
            <ul className="allPokemons__list">
                {pokemonsOnPage.map((item, index) => {
                    if (item) {
                        return (
                            <PokemonCard
                                pokemonsName={item.name}
                                pokemonId={item.id}
                                key={index}
                            />
                        );
                    }
                })}
            </ul>
            <button onClick={() => setPageNumber(pageNumber + 1)}>
                Load more
            </button>
        </>
    );
};

export default AllPokemonsList;
