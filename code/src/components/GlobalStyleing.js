import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body{
 display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fae1dd;
  width: 320px;
  height: 100px;
  margin: 20px auto 30px;
  border-radius: 20px;
  font-size: 16px;
  @media (min-width: 700px) {
    width: 500px;
    height: 100px;
    margin: 80px auto 30px;
  }
  @media (min-width: 1100px) {
    height: 100px;
    width: 50%;
    margin: 50px auto;
  }
}

button{
    appearance: button;
  background-color: #ea86b6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #e05297;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  :after {
    background-clip: padding-box;
    background-color: #f3bad6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  :main,
  :focus {
    user-select: auto;
  }
  :hover:not(:disabled) {
    filter: brightness(1.1);
  }
  :disabled {
    cursor: auto;
  }
  :active:after {
    border-width: 0 0 0px;
  }
  :active {
    padding-bottom: 10px;
  } 
}
`;

export default GlobalStyle;
