import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

import { useSelector, useDispatch } from "react-redux";
import { state_I } from "../../utils/interfaces";
import { loadCards } from "../../actions/actions";
import getPokemons from "../../actions/loading";
import { Button } from "react-bootstrap";

const AllPokemonsList = (): JSX.Element => {
    const dispatch = useDispatch();
    const pokemonsOnPage = useSelector((state: state_I) => state.existCards);

    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const newPokemons = getPokemons(pageNumber);
        dispatch(loadCards(newPokemons));
    }, [dispatch, pageNumber]);

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
            <footer className="main_footer">
                <Button
                    className="btn_load-more"
                    size="lg"
                    type="priamry"
                    onClick={() => setPageNumber(pageNumber + 1)}>
                    Load more
                </Button>
            </footer>
        </>
    );
};

export default AllPokemonsList;
