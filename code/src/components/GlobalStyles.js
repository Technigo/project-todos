import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Gaegu', cursive;
    font-size: 21px;
    line-height: 0.9em;
    display: grid;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  h2 {
    margin: 0px;
    line-height: 1.5em;
    text-transform: uppercase;
  }
`
