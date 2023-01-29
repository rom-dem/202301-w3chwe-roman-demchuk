export interface PokemonData {
  name: string;
  weight: number;
  id: number;
  sprites: { other: { "official-artwork": { front_default: string } } };
  types: [{ type: { name: string } }];
}
export interface ComponentStructure {
  element: Element;
  render: () => void;
  addListeners?: () => void;
}

export interface CardComponentStructure {
  pokemon: PokemonData;
}
