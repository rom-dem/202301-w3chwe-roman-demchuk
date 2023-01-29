import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML = `
      <img class="header__logo" src="images/pokemon-logo.svg" alt="pokemon-logo" height=95>
    `;
  }
}

export default HeaderComponent;
