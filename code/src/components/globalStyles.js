import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: 'Gaegu', cursive;
    display: grid;
  }

  h2 {
    margin-top: 10px;
  }

  input {
    font-family: 'Gaegu', cursive;
    background: transparent;
    margin: 5px;
    font-size: 18px;
  }

  button {
    font-family: 'Gaegu', cursive;
    background: transparent;
    border: none;
  }

  label {
    font-family: 'Gaegu', cursive;
    background: transparent;
    border: none;
  }


`

export default GlobalStyle