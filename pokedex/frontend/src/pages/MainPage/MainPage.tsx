import React from "react";
import { Nav } from "react-bootstrap";

import AllPokemonsList from "../../components/AllPokemonsList/AllPokemonsList";

import "./MainPage.scss";

const MainPage = (): JSX.Element => {
    return (
        <div className="page-wrapper">
            <Nav
                fill
                variant="tabs"
                defaultActiveKey="/main"
                className="navigation__list">
                <Nav.Item className="navigation__item">
                    <Nav.Link
                        href="/main"
                        onSelect={(eventKey, event) => {
                            event.preventDefault();
                        }}>
                        Main page
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navigation__item">
                    <Nav.Link
                        href="/currentPokemon"
                        onSelect={(eventKey, event) => {
                            event.preventDefault();
                        }}>
                        Current pokemon
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navigation__item">
                    <Nav.Link
                        href="/cacthedPokemons"
                        onSelect={(eventKey, event) => {
                            event.preventDefault();
                        }}>
                        Сatched pokemons
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <main className="main-wrapper">
                <AllPokemonsList />
            </main>
        </div>
    );
};

export default MainPage;
