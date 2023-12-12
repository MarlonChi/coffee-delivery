import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global";
import theme from "../src/styles/themes/theme";
import store from "../src/store/configureStore";

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];
