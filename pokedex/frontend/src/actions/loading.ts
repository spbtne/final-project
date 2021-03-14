import { AmountOfPokemonsOneScreen } from "./../utils/const";
import PokemonsData from "../public/db.json";
import { cardsItem } from "../utils/interfaces";


const getPokemons = (pageNumber: number): cardsItem[] => {
    
    const currentAmountOfPokemons =
        AmountOfPokemonsOneScreen * (pageNumber - 1);
    const freshPokemonsArray = [];
    for (let i = 0; i < AmountOfPokemonsOneScreen; i++) {
        freshPokemonsArray.push({
            name: PokemonsData.pokemons[i + currentAmountOfPokemons].name,
            id: PokemonsData.pokemons[i + currentAmountOfPokemons].id,
            isFree: true
        });
    }
    return freshPokemonsArray;
};

export default getPokemons;
