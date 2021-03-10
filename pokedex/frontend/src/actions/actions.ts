import { LOAD_CARDS } from "./types";
import { cardsArray, stateActions_I } from "../utils/interfaces";

export const loadCards = (freshCards: cardsArray[]): stateActions_I => {
    return { type: LOAD_CARDS, payload: freshCards };
};
