import type { PokemonData } from "../types/types.js";

// Let pokemonData: PokemonData;
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const getPokeapi = async (id: string) => {
  const response = await fetch(`${apiUrl}${id}`);

  const pokemonData = (await response.json()) as PokemonData;
  return pokemonData;
};
