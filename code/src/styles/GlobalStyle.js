import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');

* {
    box-sizing: border-box;
  }
  

body {
    margin: 0;
    font-family: 'Quicksand', serif;
  }
`;

export default GlobalStyle;
