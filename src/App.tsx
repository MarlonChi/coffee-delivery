import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/theme";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import store from "./store/configureStore";

import BannerMain from "./components/BannerMain";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Coffee Delivery</h1>
        <BannerMain />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
