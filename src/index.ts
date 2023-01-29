import CardComponent from "./ts/components/CardComponent/CardComponent.js";
import Component from "./ts/components/Component/Component.js";
import ContainerComponent from "./ts/components/ContainerComponent/ContainerComponent.js";
import HeaderComponent from "./ts/components/HeaderComponent/HeaderComponent.js";
import { getPokeapi } from "./ts/getPokeapi/getPokeapi.js";

const { body } = document;

const header = new HeaderComponent(body, "header", "header");

header.render();

const root = new Component(body, "root", "div");

root.render();

const container = new ContainerComponent(
  root.element,
  "card-container",
  "section"
);
container.render();

const pokemonList = document.querySelector(".card-container__list");

(async () => {
  const totalPokemons = 1008;
  const pokemonsPerPage = 6;
  const randomLow = Math.floor(
    Math.random() * (totalPokemons - pokemonsPerPage)
  );
  const randomHigh = randomLow + (pokemonsPerPage - 1);
  const pokemons = await getPokeapi(randomLow, randomHigh);
  pokemons.forEach((info) => {
    const pokemonCard = new CardComponent(pokemonList, info);
  });
})();
