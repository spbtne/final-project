import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import {
    Button,
    Card,
    ListGroup,
    ListGroupItem,
    Spinner,
} from "react-bootstrap";

import { letGoPokemon } from "../../actions/actions";
import { capitalize } from "../../utils/const";
import { card_I, state_I } from "../../utils/interfaces";

import "./PokemonInfo.scss";

const PokemonInfo = (props: card_I): JSX.Element => {
    const dispatch = useDispatch();
    const caughtPokemons = useSelector(
        (state: state_I) => state.caughtPokemons
    );
    const checkCatchDate = (pokemon: card_I) => {
        const pokemonInCaught = caughtPokemons.find(
            (item) => item.id === pokemon.id
        );
        if (
            pokemonInCaught != undefined &&
            pokemonInCaught.catchDate != undefined
        ) {
            return (
                <ListGroupItem>
                    {`Caught ${formatDistanceToNow(pokemonInCaught.catchDate, {
                        addSuffix: true,
                    })}`}
                </ListGroupItem>
            );
        } else {
            return <ListGroupItem>Not caught</ListGroupItem>;
        }
    };

    const [date, setDate] = useState(checkCatchDate(props));
    const [pokemonHeight, setPokemonHeight] = useState(
        <Spinner animation="border" variant="primary" size="sm" />
    );
    const [pokemonWeight, setPokemonWeight] = useState(
        <Spinner animation="border" variant="primary" size="sm" />
    );
    const [pokemonDescription, setPokemonDescription] = useState(
        <div className="spinner-wrapper">
            <Spinner animation="border" variant="primary" size="sm" />
        </div>
    );

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/ability/${props.id}`)
            .then((response) => {
                const description = response.data.effect_entries.find(
                    (item: { language: { name: string } }) => {
                        return item.language.name === "en";
                    }
                );
                setPokemonDescription(description.effect);
            });
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
            .then((response) => {
                setPokemonHeight(response.data.height);
                setPokemonWeight(response.data.weight);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="current-pokemon-frame">
            <Card className="pokemonInfo">
                <div className="img-wrapper">
                    <Card.Img
                        src={require(`../../public/${props.id}.png`)}
                        alt={capitalize(props.name)}
                        className="pokemonInfo__img"
                    />
                </div>
                <Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem> id: {props.id}</ListGroupItem>
                        <ListGroupItem> height: {pokemonHeight}</ListGroupItem>
                        <ListGroupItem>weight: {pokemonWeight}</ListGroupItem>
                        {date}
                    </ListGroup>
                </Card.Body>
            </Card>
            <div className="pokemonInfo__description">
                <div className="card-title">
                    <h1>{capitalize(props.name)}</h1>
                </div>
                <div className="pokemonInfo__description-text">
                    {pokemonDescription}
                </div>

                <Button
                    variant="warning"
                    className="button button__let-go"
                    onClick={() => {
                        dispatch(letGoPokemon(props));
                        const checkStorage = caughtPokemons.find(
                            (item) => item.id === props.id
                        );
                        if (checkStorage != undefined) {
                            setDate(<ListGroupItem>Not caught</ListGroupItem>);
                        } else {
                            alert("Firstly try to catch it!");
                        }
                    }}>
                    Let go
                </Button>
            </div>
        </div>
    );
};

export default PokemonInfo;
