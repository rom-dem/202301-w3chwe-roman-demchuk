import Component from "../Component/Component.js";

class ContainerComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML = `
        <ul class="card-container__list list">
        </ul>
    `;
    return this.element.innerHTML;
  }
}

export default ContainerComponent;
