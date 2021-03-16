import { card_I, stateActions_I } from "../utils/interfaces";
import {
    LOAD_DATA,
    LOAD_CARDS,
    MOVE_TO_CURRENT_POKEMON,
    CATCH_POKEMON,
    LETGO_POKEMON,
} from "./actionTypes";

export const loadCards = (freshCards: card_I[]): stateActions_I => {
    return { type: LOAD_CARDS, payload: freshCards };
};

export const loadAllPokemons = (data: card_I[]): stateActions_I => {
    return { type: LOAD_DATA, payload: data };
};

export const moveToCurrentPokemon = (
    currentPokemon: card_I
): stateActions_I => {
    return { type: MOVE_TO_CURRENT_POKEMON, payload: currentPokemon };
};

export const catchPokemon = (pokemon: card_I): stateActions_I => {
    return { type: CATCH_POKEMON, payload: pokemon };
};

export const letGoPokemon = (pokemon: card_I): stateActions_I => {
    return { type: LETGO_POKEMON, payload: pokemon };
};
