import HeaderComponent from "./HeaderComponent";

describe("Given HeaderComponent component", () => {
  describe("When it's rendered with img tag", () => {
    test("Then it should show an img component on the screen", () => {
      const screen = document.createElement("div");
      const tag = "img";

      const paragraphComponent = new HeaderComponent(screen, "", tag);
      paragraphComponent.render();

      const paragraph = screen.querySelector(tag);

      expect(paragraph).not.toBeNull();
    });
  });
});
