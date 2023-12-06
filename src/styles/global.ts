import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    background: ${theme.colors.background};
    color: ${theme.colors.baseText};
    height: 100vh;
    width: 100vw;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Baloo 2", sans-serif;
    color: ${theme.colors.baseTitle};
  }

  ul,
  li {
    list-style: none;
  }
`}
`;

export default GlobalStyle;
