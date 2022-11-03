import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*:focus {
  outline: none;
  border-color: #706B6B;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #F7CAC9;
}

/* a {
  text-decoration: none;
  color: darkgray;
} */
h1 {
  margin: 20px 0 20px 20px;
}
h3{
color: #706B6B;
}

input[type="checkbox"] {
  filter: hue-rotate(300deg);
  &:hover {
    cursor: pointer;
    }
} 
button {
  box-sizing: border-box;
  border: none;
  background: none;
  cursor: pointer;
}
`
