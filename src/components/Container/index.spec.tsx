import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import { Container } from ".";

describe("<Container/>", () => {
  it("should render container", () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Coffe Delivery</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule("max-width", "144rem");

    expect(container.firstChild).toMatchSnapshot();
  });
});
