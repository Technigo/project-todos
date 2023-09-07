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
    --btn-hover: #1f1f1f;
    --btn-border: coral;
    --btn-disabled: #8b8a8b;
  }`

export default GlobalStyles;