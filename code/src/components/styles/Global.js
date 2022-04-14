import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
  background-color: #fffcf9;
}

main {
  max-width: 365px;
  margin: auto;
}

footer {
  text-align: center;
  font-weight: 400;
  color: darkgray;
}

a {
  text-decoration: none;
  color: darkgray;
}

h1 {
  margin: 20px 0 20px 20px;
}

input[name="input"] {
  width: 95%;
  height: 20px;
  border: 1px solid #706B6B;
  border-radius: 5px;
  padding: 5px;
  font-size: 1.2em;
  background-color: #fffefd;
  margin-bottom: 10px;
}

input[name="checkTask"] {
  width: 18px;
  height: 18px; 
  position: absolute;
  top: 0;
  -webkit-transform: scale(1, 1);
  filter: hue-rotate(300deg);

  &:hover {
    cursor: pointer;
    }
}

label {
  color: #706B6B;
  font-size: .9em;
}

button {
  box-sizing: border-box;
  border: none;
  background: none;
  cursor: pointer;
}
`