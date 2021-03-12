import React from "react";

import AllPokemonsList from "../../components/AllPokemonsList/AllPokemonsList";

import "./MainPage.scss";

const MainPage = (): JSX.Element => {
    return (
        <main className="main-wrapper">
            <AllPokemonsList />
        </main>
    );
};

export default MainPage;
