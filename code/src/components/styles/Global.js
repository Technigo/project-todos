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
@font-face {
  font-family: "Urbanist";
  font-weight: 400;
  src: url('https://github.com/coreyhu/Urbanist/blob/main/fonts/otf/Urbanist-Regular.otf?raw=true');
}
@font-face {
  font-family: "Urbanist";
  font-weight: 600;
  src: url('https://github.com/coreyhu/Urbanist/blob/main/fonts/otf/Urbanist-Bold.otf?raw=true');
}

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
  font-family:'Urbanist-Regular', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-family: 'Phosphate';
}

@media (min-width: 668px) {
  html {
    font-size: 22px;
  }
}

@media (min-width: 1025px) {
  
}
`

export default GlobalStyles