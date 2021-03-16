import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { Button, Spinner } from "react-bootstrap";

import PokemonCard from "../PokemonCard/PokemonCard";

import { state_I } from "../../utils/interfaces";

import { loadCards, loadAllPokemons } from "../../actions/actions";
import getPokemons from "../../utils/getPokemons";
import { useIsMount } from "../../utils/useIsMount";

const AllPokemonsList = (): JSX.Element => {
    const dispatch = useDispatch();
    const pokemonsOnState = useSelector((state: state_I) => state.existCards);

    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setLoading] = useState(true);

    const isMount = useIsMount();

    useEffect(() => {
        axios.get("http://localhost:3000/pokemons").then((response) => {
            dispatch(loadAllPokemons(response.data));
            setLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!isMount) {
            const newPokemons = getPokemons(pageNumber, PokemonsData);
            dispatch(loadCards(newPokemons));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber]);

    const PokemonsData = useSelector((state: state_I) => state.pokemonsData);
    if (isLoading) {
        return (
            <div className="main-page__loading">
                {" "}
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    if (pokemonsOnState.length === 0) {
        const newPokemons = getPokemons(pageNumber, PokemonsData);
        dispatch(loadCards(newPokemons));
    }

    return (
        <>
            <ul className="allPokemons__list">
                {pokemonsOnState.map((item) => {
                    return (
                        <PokemonCard
                            name={item.name}
                            id={item.id}
                            isFree={item.isFree}
                            key={item.id.toString()}
                        />
                    );
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
