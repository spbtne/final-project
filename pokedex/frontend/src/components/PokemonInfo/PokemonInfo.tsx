import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { capitalize } from "../../utils/const";
import { CardInfo } from "../../utils/interfaces";

import "./PokemonInfo.scss";

const PokemonInfo = (props: CardInfo): JSX.Element => {
    return (
        <div className="current-pokemon-frame">
            <Card className="pokemonInfo">
                <div className="img-wrapper">
                    <Card.Img
                        src={require(`../../public/${props.pokemonId}.png`)}
                        alt={capitalize(props.pokemonsName)}
                        className="pokemonInfo__img"
                    />
                </div>
                <Card.Body>
                    <ListGroup horizontal="lg" className="list-group-flush">
                        <ListGroupItem> height: 70</ListGroupItem>
                        <ListGroupItem>weight: 320</ListGroupItem>
                        <ListGroupItem>Not cathed</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            <div className="pokemonInfo__description">
                <div className="card-title">
                    <h1>{capitalize(props.pokemonsName)}</h1>
                </div>
                <div className="pokemonInfo__description-text">
                    This Pokémon cannot be infatuated and is immune to
                    captivate. If a Pokémon is infatuated and acquires this
                    ability, its infatuation is cleared.
                </div>

                <Button variant="warning" className="button button__let-go">
                    Let go
                </Button>
            </div>
        </div>
    );
};

export default PokemonInfo;
