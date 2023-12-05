import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/theme";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Coffee Delivery</h1>
    </ThemeProvider>
  );
}

export default App;
