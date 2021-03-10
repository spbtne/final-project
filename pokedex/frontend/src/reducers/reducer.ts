import { LOAD_CARDS } from "../actions/types";
import { state_I, stateActions_I } from "../utils/interfaces";

const initialState: state_I = {
    existCards: [],
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
        default: {
            return state;
        }
    }
};

export default reducer;
