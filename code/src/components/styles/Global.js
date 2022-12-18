import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

//reset CSS
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

//styling
#root {
  height: 100%;
}

html {
  font-size: 16px;
}

embed { 
  display: none; 
}

button:active + embed { 
  display: block; 
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-family: 'Monoton', cursive;

}

.react-icons {
  height: 1.5rem;
  width: 1.5rem;
}

@media (min-width: ${({ theme }) => theme.tablet}){
  html {
    font-size: 22px;
  }
  .react-icons {
  height: 2rem;
  width: 2rem;
}
}

@media (min-width: 1025px) {
  
}
`

export default GlobalStyles