import {
    LOAD_CARDS,
    MOVE_TO_CURRENT_POKEMON,
    CATCH_POKEMON,
    LETGO_POKEMON,
} from "../actions/types";
import { state_I, stateActions_I } from "../utils/interfaces";

const initialState: state_I = {
    existCards: [],
    currentPokemon: {
        name: "",
        id: 0,
        isFree: true,
        catchDate: undefined,
        key: "",
    },
    caughtPokemons: [],
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
 
            const currentPokemonID = payload.id;

            const isPokemonCaught = state.caughtPokemons.find(item => item.id === currentPokemonID)

            let currentPokemon;
            if (isPokemonCaught != undefined) {
                currentPokemon = isPokemonCaught;
            } else {
                currentPokemon = payload;
            }


            return { ...state, currentPokemon };

            // const currentPokemon = payload;
            // return {...state, currentPokemon}
        }
        case CATCH_POKEMON: {
            if (payload) {
                const newPokemon = Object.create(null);
                newPokemon.id = payload.id;
                newPokemon.name = payload.name;
                newPokemon.isFree = false;
                newPokemon.catchDate = Date.now();
                const caughtPokemons = state.caughtPokemons.concat(newPokemon);
                console.log(caughtPokemons);
                return { ...state, caughtPokemons };
            } else {
                return state;
            }
        }
        case LETGO_POKEMON: {
            if (payload) {
                let pokemonInd = 0;
                state.caughtPokemons.find((item, index) => {
                    if (item.id === payload.id) {
                        pokemonInd = index;
                    }
                });
                const caughtPokemons = [...state.caughtPokemons];
                if (pokemonInd != undefined) {
                    caughtPokemons.splice(pokemonInd, 1);
                }
                console.log(caughtPokemons)
                return { ...state, caughtPokemons };
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
