import type { PokemonData } from "../types/types.js";

// Let pokemonData: PokemonData;
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const getPokeapi = async (
  start: number,
  end: number
): Promise<PokemonData[]> => {
  const pokemons = [];
  for (let position = start; position <= end; position++) {
    const response = fetch(`${apiUrl}${position}`);
    pokemons.push(response);
  }

  const unresolvedPokemons = await Promise.all(pokemons);
  const resolvedPokemons = unresolvedPokemons.map(async (unresolvedPokemon) =>
    unresolvedPokemon.json()
  );

  const pokemonData = (await Promise.all(resolvedPokemons)) as PokemonData[];

  return pokemonData;
};
