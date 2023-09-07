import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: #fed8e5; 
    color: #8a2be2;
    font-family: 'Fredoka', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  overflow-x: hidden;
};

*,
*:before,
*:after {
  box-sizing: border-box;
};

:root {
    --btn-color: #000;
    --btn-border: #8a2be2;
    --btn-disabled: #8b8a8b;
    --btn-hover: #8a2be2;
  }`

export default GlobalStyles;