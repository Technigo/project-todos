import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --theme-primary: #e4fd81;
  --theme-secondary: #004aad;
  --theme-tertiary: #ffabdf;
}

body {
  margin: 0;
  padding: 0;
  background-color: #e4fd81;
  font-family: 'Open Sans', sans-serif;
}


`;

export default GlobalStyle;
