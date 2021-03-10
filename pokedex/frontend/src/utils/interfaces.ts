interface cardsArray {
    name: string;
    id: number;
}
[];

interface stateActions_I {
    type: string;
    payload?: cardsArray[];
}

interface state_I {
    existCards: cardsArray[];
}

interface CardInfo {
    pokemonsName: string;
    pokemonId: number;
}

export type { cardsArray, stateActions_I, state_I, CardInfo };