import React from "react";
import { Button } from "react-bootstrap";

type CardInfo = {
    pokemonsName: string;
    pokemonId: number;
};

import "./PokemonCard.scss";
const PokemonCard = (props: CardInfo): JSX.Element => {
    return (
        <li className="allPokemons__item pokemonCard">
            <div className="pokemonCard__title">{props.pokemonsName}</div>
            <img
                src={require(`../../public/${props.pokemonId}.png`)}
                alt={props.pokemonsName}
                className="pokemonCard__img"
            />
            <Button variant="primary">Catch me</Button>
        </li>
    );
};

export default PokemonCard;
