import { render, screen } from "@testing-library/react";

import BannerMain from ".";

describe("<BannerMain/>", () => {
  it("should render the heading", () => {
    render(<BannerMain />);

    expect(
      screen.getByRole("heading", { name: /BannerMain/i })
    ).toBeInTheDocument();
  });
});
