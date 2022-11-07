import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Gaegu', cursive;
    font-size: 20px;
    line-height: 18px;
    display: grid;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h2 {
    line-height: 0.7em;
  }
`

export default GlobalStyle