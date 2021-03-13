import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { moveToCurrentPokemon } from "../../actions/actions";
import { capitalize } from "../../utils/const";
import { CardInfo, cardsItem } from "../../utils/interfaces";

import "./PokemonCard.scss";

import { useHistory } from "react-router-dom";

const PokemonCard = (props: CardInfo): JSX.Element => {
    const history = useHistory();
    const dispatch = useDispatch();
    const pokemonObj: cardsItem = {
        name: props.pokemonsName,
        id: props.pokemonId,
    };

    return (
        <>
            <Card
                className="allPokemons__item pokemonCard"
                onClick={() => {
                    dispatch(moveToCurrentPokemon(pokemonObj));
                    history.push("/currentPokemon");
                }}>
                <Card.Header>
                    <Card.Img
                        src={require(`../../public/${props.pokemonId}.png`)}
                        alt={capitalize(props.pokemonsName)}
                    />
                </Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">
                        {capitalize(props.pokemonsName)}
                    </Card.Title>
                    <Button variant="primary">Catch me</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default PokemonCard;
