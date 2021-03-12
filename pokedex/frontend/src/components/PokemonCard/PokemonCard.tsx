import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { capitalize } from "../../utils/const";
import { CardInfo } from "../../utils/interfaces";

import "./PokemonCard.scss";

const PokemonCard = (props: CardInfo): JSX.Element => {
    return (
        <>
            <Card className="allPokemons__item pokemonCard">
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
