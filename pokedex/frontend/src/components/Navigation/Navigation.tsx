import React from "react";
import { propsBoolean } from "../../utils/interfaces";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

import "./Navigation.scss";

const Navigation = (props: propsBoolean): JSX.Element => {
    if (props.isDisabled) {
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
                        to="/currentPokemon"
                        disabled>
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
    } else {
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
    }
};

export default Navigation;
