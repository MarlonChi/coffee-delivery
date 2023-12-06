import { ThemeProvider } from "styled-components";
import { RenderResult, render } from "@testing-library/react";

import theme from "../../styles/themes/theme";

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
