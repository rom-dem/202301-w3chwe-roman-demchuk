import type { CardComponentStructure, PokemonData } from "../../types/types.js";
import Component from "../Component/Component.js";

class CardComponent extends Component implements CardComponentStructure {
  pokemon: PokemonData;

  constructor(parentElement: Element, pokemon: PokemonData) {
    super(parentElement, `card card-type-${pokemon.types[0].type.name}`, "li");
    this.pokemon = pokemon;
    this.render();
  }

  render() {
    super.render();
    this.element.innerHTML = `
        <article class="card__article">
          <img class="card__image" src="${this.pokemon.sprites.other["official-artwork"].front_default}" alt="${this.pokemon.name}" height=200 width=200>
          <div class="card__content">    
              <h2 class="card__title">${this.pokemon.name}</h2>
              <div class="card__index"># ${this.pokemon.id}</div>
              <span class="card__info">Weight: ${this.pokemon.weight} kg Type: ${this.pokemon.types[0].type.name}</span>
          </div>    
        </article>
    `;
  }
}

export default CardComponent;
