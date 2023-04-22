import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #274C43;
    font-family: 'Shadows Into Light', cursive;
    font-size: 22px;
    line-height: 1em;
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

export default GlobalStyle