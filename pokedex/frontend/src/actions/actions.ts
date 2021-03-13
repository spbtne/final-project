import { LOAD_CARDS, MOVE_TO_CURRENT_POKEMON } from "./types";
import { cardsItem, stateActions_I } from "../utils/interfaces";

export const loadCards = (freshCards: cardsItem[]): stateActions_I => {
    return { type: LOAD_CARDS, payload: freshCards };
};

export const moveToCurrentPokemon = (
    currentPokemon: cardsItem
): stateActions_I => {
    return { type: MOVE_TO_CURRENT_POKEMON, payload: currentPokemon };
};
