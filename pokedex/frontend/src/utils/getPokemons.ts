import { AmountOfPokemonsOneScreen } from "./const";
import { card_I } from "./interfaces";

const getPokemons = (pageNumber: number, PokemonsData: card_I[]): card_I[] => {
    const currentAmountOfPokemons =
        AmountOfPokemonsOneScreen * (pageNumber - 1); //counting the number of pokemon on the page
    const freshPokemonsArray = [];
    for (let i = 0; i < AmountOfPokemonsOneScreen; i++) {
        freshPokemonsArray.push({
            name: PokemonsData[i + currentAmountOfPokemons].name,
            id: PokemonsData[i + currentAmountOfPokemons].id,
            isFree: true,
        });
    }
    return freshPokemonsArray;
};

export default getPokemons;
