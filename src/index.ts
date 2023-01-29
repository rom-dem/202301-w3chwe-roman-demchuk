import Component from "./ts/components/Component/Component.js";
import HeaderComponent from "./ts/components/HeaderComponent/HeaderComponent.js";
import { getPokeapi } from "./ts/getPokeapi/getPokeapi.js";

const container = document.querySelector(".root");

const header = new HeaderComponent(container, "header", "header");

header.render();

const article = new Component(container, "card", "article");

article.render();
