import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/theme";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Main from "./pages/Main";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
