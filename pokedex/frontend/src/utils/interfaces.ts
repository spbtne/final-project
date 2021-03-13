interface cardsItem {
    name: string;
    id: number;
}
[];

interface stateActions_I {
    type: string;
    payload?: any;
}

interface state_I {
    existCards: cardsItem[];
    currentPokemon: cardsItem;
}

interface CardInfo {
    pokemonsName: string;
    pokemonId: number;
    key?: string;
    children?: Element;
}

interface propsBoolean {
    isDisabled: boolean;
}

export type { cardsItem, stateActions_I, state_I, CardInfo, propsBoolean };
