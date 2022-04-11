import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*:focus {
    outline: none;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

main {
    max-width: 365px;
    margin: auto;
}

h1 {
    margin: 20px 0 20px 0;
}

input[name="content"] {
    width: 80%;
    height: 20px;
    border: 1px solid #706B6B;
    border-radius: 5px;
    padding: 5px;
    font-size: 1.2em;
}

input[name="checkTask"] {
    width: 20px;
    height: 20px; 
}

form img {
    width: 45px;
    position: absolute;
    right: -10px;
    top: 10px;

}

form {
    position: relative;
}

p { 
    color: #706B6B;
}

button {
    border: none;
    background: none;
    cursor: pointer;
}

`