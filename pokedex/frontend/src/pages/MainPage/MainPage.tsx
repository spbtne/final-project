import React from "react";

import AllPokemonsList from "../../components/AllPokemonsList/AllPokemonsList";

import "./MainPage.scss";

type PokemonsData = {
    pokemons: {
        name: string;
        id: number;
    }[];
};

const MainPage = (props: PokemonsData): JSX.Element => {
    return (
        <div className="page-wrapper">
            <nav className="navigation-wrapper">
                <ul className="navigation__list">
                    <li className="navigation__item">Main</li>
                    <li className="navigation__item">Current pokemon</li>
                    <li className="navigation__item">Сatched pokemons</li>
                </ul>
            </nav>
            <main className="main-wrapper">
                <AllPokemonsList {...props} />
            </main>
        </div>
    );
};

export default MainPage;
