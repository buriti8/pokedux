import axios from "axios";

export const getPokemons = async () => {
    try {
        const resp = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");

        return resp.data.results.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonDetails = async (pokemon) => {
    try {
        const resp = await axios.get(pokemon.url);
        return resp.data;
    } catch (error) {
        console.log(error);
    }
}