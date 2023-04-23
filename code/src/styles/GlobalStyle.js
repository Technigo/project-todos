import { createGlobalStyle } from 'styled-components/macro';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    background: rgb(51,102,255);
    background: linear-gradient(180deg, rgba(51,102,255,1) 0%, rgba(255,0,255,1) 100%);
    background-repeat: no-repeat;
    min-height: 100vh;
    background-size: cover;
    font-family: 'DynaPuff', cursive;
    font-size: 20px;
    display: flex;
    justify-content: center;
    }
`;

export const Wrapper = styled.div`
    background: white;
    border: solid 0.4rem #e3bdf0;
    width: 80vw;
    text-align: center;
    padding: 10px;
    margin: 20px auto;
    margin-bottom: 40px;
    border-radius: 25px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  
    @media (min-width: 668px) {
    width: 55vw;
  }
`;

// export const Button = styled.button`
//   font-size: 18px;
//   padding: 4px 13px;
//   margin: 8px;
//   font-family: 'Dynapuff', cursive;
//   background: tomato;
//   color: #fff;
//   border: solid 2px red;
//   border-radius: 30px;
//   cursor: pointer;
//   /* :hover {
//     opacity: 70%;
//   } */
// `;
