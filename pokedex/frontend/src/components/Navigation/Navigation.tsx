import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { Nav } from "react-bootstrap";

import { propsBoolean, state_I } from "../../utils/interfaces";
import { capitalize } from "../../utils/const";

import "./Navigation.scss";

const Navigation = (props: propsBoolean): JSX.Element => {
    const currentPokemon = useSelector(
        (state: state_I) => state.currentPokemon
    );
    const disableMenuButton = (isDisabled: boolean): JSX.Element => {
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
                {disableMenuButton(props.isDisabled)}
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
