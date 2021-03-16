import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card } from "react-bootstrap";

import { catchPokemon, moveToCurrentPokemon } from "../../actions/actions";
import { capitalize } from "../../utils/const";
import { card_I, state_I } from "../../utils/interfaces";

import "./PokemonCard.scss";

const PokemonCard = (props: card_I): JSX.Element => {
    const history = useHistory();
    const dispatch = useDispatch();
    const caughtPokemons = useSelector(
        (state: state_I) => state.caughtPokemons
    );
    const [buttonText, setButtonText] = useState("Catch me");

    const pokemonInCaught = caughtPokemons.find((item) => item.id === props.id);

    const [buttonDisabled, setButtonDisabled] = useState(() => {
        if (pokemonInCaught != undefined) {
            setButtonText("Caught");
            return true;
        }
    });

    return (
        <>
            <Card className="allPokemons__item pokemonCard">
                <div
                    className="card-wrapper"
                    onClick={() => {
                        history.push("/currentPokemon");
                        dispatch(moveToCurrentPokemon(props));
                    }}>
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
                        setButtonDisabled(true);
                        setButtonText("Caught");
                    }}>
                    {buttonText}
                </Button>
            </Card>
        </>
    );
};

export default PokemonCard;
