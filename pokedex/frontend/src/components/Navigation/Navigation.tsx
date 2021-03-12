import React from "react";

import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

import "./Navigation.scss";

const Navigation = (): JSX.Element => {
    return (
        <Nav fill variant="tabs" className="navigation__list">
            <Nav.Item className="navigation__item">
                <Nav.Link activeClassName="active" as={NavLink} to="/main">
                    Main page
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navigation__item">
                <Nav.Link
                    activeClassName="active"
                    as={NavLink}
                    to="/currentPokemon">
                    Current pokemon
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navigation__item">
                <Nav.Link
                    activeClassName="active"
                    as={NavLink}
                    to="/catchedPokemons">
                    Сatched pokemons
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navigation;
