import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Raleway', sans-serif;
}

h1 {
  font-family: 'Zilla Slab', serif;
  font-size: 2rem;
}
`