import formatDistanceToNow from "date-fns/formatDistanceToNow";
import React, {  useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { letGoPokemon } from "../../actions/actions";
import { capitalize } from "../../utils/const";
import { cardsItem, state_I } from "../../utils/interfaces";

import "./PokemonInfo.scss";

const PokemonInfo = (props: cardsItem): JSX.Element => {
    const dispatch = useDispatch();
    const caughtPokemons = useSelector((state: state_I) => state.caughtPokemons);
    const checkCatchDate = (pokemon: cardsItem) => {
    const pokemonInCaught = caughtPokemons.find((item) => item.id === pokemon.id);
        if (pokemonInCaught != undefined && pokemonInCaught.catchDate != undefined) {
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
                        <ListGroupItem> height: 70</ListGroupItem>
                        <ListGroupItem>weight: 320</ListGroupItem>
                        {date}
                    </ListGroup>
                </Card.Body>
            </Card>
            <div className="pokemonInfo__description">
                <div className="card-title">
                    <h1>{capitalize(props.name)}</h1>
                </div>
                <div className="pokemonInfo__description-text">
                    This Pokémon cannot be infatuated and is immune to
                    captivate. If a Pokémon is infatuated and acquires this
                    ability, its infatuation is cleared.
                </div>

                <Button variant="warning" className="button button__let-go"  
                onClick={() => {
                            dispatch(letGoPokemon(props));
                            const checkStorage = caughtPokemons.find(item => item.id === props.id)
                            if(checkStorage != undefined) {
                            setDate(<ListGroupItem>Not caught</ListGroupItem>);}

                        }}>
                    Let go
                </Button>
            </div>
        </div>
    );
};

export default PokemonInfo;
