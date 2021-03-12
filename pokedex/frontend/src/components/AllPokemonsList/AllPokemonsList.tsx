import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { state_I } from "../../utils/interfaces";
import { loadCards } from "../../actions/actions";
import getPokemons from "../../actions/loading"; //

// const getPokemons = (pageNumber: number): cardsArray[] => {
//     const currentAmountOfPokemons (Максимальное количество карточек на одном экране)=
//         AmountOfPokemonsOneScreen * (pageNumber - 1);
//     const freshPokemonsArray = [];
//     for (let i = 0; i < AmountOfPokemonsOneScreen; i++) {
//         freshPokemonsArray.push({
//             name: PokemonsData.pokemons[i + currentAmountOfPokemons].name,
//             id: PokemonsData.pokemons[i + currentAmountOfPokemons].id,
//         });
//     }
//     return freshPokemonsArray;
// };

import PokemonCard from "../PokemonCard/PokemonCard";

const AllPokemonsList = (): JSX.Element => {
    const dispatch = useDispatch();
    const pokemonsOnState = useSelector((state: state_I) => state.existCards);
    const [pageNumber, setPageNumber] = useState(1);
    const newPokemons = getPokemons(pageNumber);
    useEffect(() => {
        console.log(history);
        dispatch(loadCards(newPokemons));
    }, [pageNumber]);

    return (
        <>
            <ul className="allPokemons__list">
                {pokemonsOnState.map((item) => {
                    if (item) {
                        return (
                            <PokemonCard
                                pokemonsName={item.name}
                                pokemonId={item.id}
                                key={item.id.toString()}
                            />
                        );
                    }
                })}
            </ul>
            <footer className="main_footer">
                <Button
                    className="btn_load-more"
                    size="lg"
                    type="priamry"
                    onClick={() => {
                        setPageNumber(pageNumber + 1);
                    }}>
                    Load more
                </Button>
            </footer>
        </>
    );
};

export default AllPokemonsList;
