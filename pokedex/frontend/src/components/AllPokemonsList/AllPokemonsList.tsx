import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { state_I } from "../../utils/interfaces";
import { loadCards } from "../../actions/actions";
import getPokemons from "../../actions/loading";

import PokemonCard from "../PokemonCard/PokemonCard";
import { useIsMount } from "../../utils/useIsMount";

const AllPokemonsList = (): JSX.Element => {
    const dispatch = useDispatch();
    const pokemonsOnState = useSelector((state: state_I) => state.existCards);
    const [pageNumber, setPageNumber] = useState(1);
    const newPokemons = getPokemons(pageNumber);

    if (pokemonsOnState.length === 0) {
        dispatch(loadCards(newPokemons));
    }

    const isMount = useIsMount();

    useEffect(() => {
        if (!isMount) {
            dispatch(loadCards(newPokemons));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
