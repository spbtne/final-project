import React from "react";
import { propsBoolean, state_I } from "../../utils/interfaces";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

import "./Navigation.scss";
import { useSelector } from "react-redux";
import { capitalize } from "../../utils/const";

const Navigation = (props: propsBoolean): JSX.Element => {
    const currentPokemon = useSelector(
        (state: state_I) => state.currentPokemon
    );

    const disableToggle = (isDisabled: boolean): JSX.Element => {
        if (isDisabled) {
            return (
                <Nav.Link
                    activeClassName="active"
                    as={NavLink}
                    to="/currentPokemon"
                    disabled>
                    Pokemon profile
                </Nav.Link>
            );
        } else {
            return (
                <Nav.Link
                    activeClassName="active"
                    as={NavLink}
                    to="/currentPokemon">
                    {capitalize(currentPokemon.name)} profile
                </Nav.Link>
            );
        }
    };

    return (
        <Nav fill variant="tabs" className="navigation__list">
            <Nav.Item className="navigation__item">
                <Nav.Link activeClassName="active" as={NavLink} to="/main">
                    Main page
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navigation__item">
                {disableToggle(props.isDisabled)}
            </Nav.Item>
            <Nav.Item className="navigation__item">
                <Nav.Link
                    activeClassName="active"
                    as={NavLink}
                    to="/caughtPokemons">
                    Сatched pokemons
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navigation;
