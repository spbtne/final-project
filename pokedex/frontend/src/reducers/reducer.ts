import { LOAD_CARDS, MOVE_TO_CURRENT_POKEMON } from "../actions/types";
import { state_I, stateActions_I } from "../utils/interfaces";

const initialState: state_I = {
    existCards: [],
    currentPokemon: {
        name: "",
        id: 0,
    },
};

const reducer = (
    state = initialState,
    { type, payload }: stateActions_I
): state_I => {
    switch (type) {
        case LOAD_CARDS: {
            if (payload) {
                const existCards = [...state.existCards, ...payload];
                return { ...state, existCards };
            } else {
                return state;
            }
        }
        case MOVE_TO_CURRENT_POKEMON: {
            const currentPokemon = payload;
            return { ...state, currentPokemon };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
