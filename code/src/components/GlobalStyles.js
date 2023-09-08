import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
};

:root {
    --background: #fed8e5;
    --color: #8a2be2;
    --btn-color: #000;
    --btn-border: #8a2be2;
    --btn-disabled: #8b8a8b;
    --btn-hover: #8a2be2;
    --input-border: #5E5E5E;
  }
  body {
    margin: 0;
    padding: 0;
    background: var(--background); 
    color: var(--color);
    line-height: 1.4;
    font-size: 1rem;
  font-weight: 400;
    font-family: 'Fredoka', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  overflow-x: hidden;
};
`

export default GlobalStyles;