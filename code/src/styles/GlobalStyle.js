/* eslint-disable no-tabs */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*:focus {
  outline: none;
  border-color: #706B6B;
}
body {
  margin: 0;
  padding: 0;
	display: flex;
	justify-content: center;
	height: 100vh;
	box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #F7CAC9;
}

h1 {
  margin: 20px 0 20px 20px;
}
h3{
color: #706B6B;
}

p{
font-size: small;
}

button {
  box-sizing: border-box;
  border: none;
  background: none;
  cursor: pointer;
}
`
