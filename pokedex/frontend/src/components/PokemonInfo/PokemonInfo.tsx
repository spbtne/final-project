import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { capitalize } from "../../utils/const";
import { CardInfo } from "../../utils/interfaces";

import "./PokemonInfo.scss";

const PokemonInfo = (props: CardInfo): JSX.Element => {
    return (
        <>
            <Card className=" pokemonInfo" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={require(`../../public/${props.pokemonId}.png`)}
                    alt={capitalize(props.pokemonsName)}
                />
                <Card.Body>
                    <Card.Title className="text-center">
                        {capitalize(props.pokemonsName)}
                    </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="features">
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Button variant="primary">Let go</Button>
            </div>
        </>
    );
};

export default PokemonInfo;
