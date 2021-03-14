interface cardsItem {
    name: string;
    id: number;
    isFree: boolean | string;
    catchDate?: Date | undefined;
    key?: string;
}
[];

interface stateActions_I {
    type: string;
    payload?: any;
}

interface state_I {
    existCards: cardsItem[];
    currentPokemon: cardsItem;
    caughtPokemons: cardsItem[];
}


interface propsBoolean {
    isDisabled: boolean;
}

export type { cardsItem, stateActions_I, state_I, propsBoolean };
