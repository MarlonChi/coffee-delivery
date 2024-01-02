import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import theme from "./styles/themes/theme";
import GlobalStyle from "./styles/global";
import store from "./store/configureStore";
import { Router } from "./Router";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
