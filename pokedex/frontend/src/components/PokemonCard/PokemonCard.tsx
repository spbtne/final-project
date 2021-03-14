import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { catchPokemon, moveToCurrentPokemon } from "../../actions/actions";
import { capitalize } from "../../utils/const";
import { cardsItem, state_I } from "../../utils/interfaces";

import "./PokemonCard.scss";

import { useHistory } from "react-router-dom";
import { useState } from "react";

const PokemonCard = (props: cardsItem): JSX.Element => {
    const history = useHistory();
    const dispatch = useDispatch();
    const caughtPokemons = useSelector(
        (state: state_I) => state.caughtPokemons
    );
    const [buttonText, setButtonText] = useState("Catch me");

    const pokemonInCaught = caughtPokemons.find((item) => item.id === props.id);

    
    const [buttonDisabled, setButtonDisabled] = useState(()=> {if (pokemonInCaught != undefined ){ return !pokemonInCaught.isFree}});

    return (
        <>
            <Card className="allPokemons__item pokemonCard">
                <div
                    className="card-wrapper"
                    onClick={() => {
                        history.push("/currentPokemon");
                        dispatch(moveToCurrentPokemon(props));
                    }}
                >
                    <Card.Header>
                        <Card.Img
                            src={require(`../../public/${props.id}.png`)}
                            alt={capitalize(props.name)}
                        />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">
                            {capitalize(props.name)}
                        </Card.Title>
                    </Card.Body>
                </div>
                <Button
                    className="button__catch"
                    disabled={buttonDisabled}
                    variant="primary"
                    onClick={() => {
                        dispatch(catchPokemon(props));
                        setButtonText("Caught");
                        setButtonDisabled(true);
                    }}
                >
                    {buttonText}
                </Button>
            </Card>
        </>
    );
};

export default PokemonCard;
