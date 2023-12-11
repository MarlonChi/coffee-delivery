import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/theme";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import store from "./store/configureStore";

import BannerMain from "./components/BannerMain";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <BannerMain />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
