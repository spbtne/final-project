interface card_I {
    name: string;
    id: number;
    isFree: boolean | string;
    catchDate?: Date | undefined;
    key?: string;
}
[];

interface stateActions_I {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

interface state_I {
    pokemonsData: card_I[];
    existCards: card_I[];
    currentPokemon: card_I;
    caughtPokemons: card_I[];
}

interface propsBoolean {
    isDisabled: boolean;
}

export type { card_I, stateActions_I, state_I, propsBoolean };
