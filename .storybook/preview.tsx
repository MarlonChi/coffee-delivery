import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global";
import theme from "../src/styles/themes/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
