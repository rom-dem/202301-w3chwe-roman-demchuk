export interface PokemonData {
  name: string;
  weight: number;
  id: number;
  sprites: { other: { "official-artwork": { front_default: string } } };
}
export interface ComponentStructure {
  element: Element;
  render: () => void;
  addListeners?: () => void;
}
