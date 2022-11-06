import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

`

export const OuterWrapper = styled.div`
  background-color: #faf6f0;
;
`

export const InnerWrapper = styled.section`
max-width: 940px;
width: 90%;
height: 100vh;
margin: 0 auto;
background-color: #fbdfcf;
display: flex;
flex-direction: column;
@media (min-width: 667px) and (max-width: 1024px) {
  width: 75%;
}
@media (min-width: 1025px) {
  width: 75%;
}
`;

export const Button = styled.button`
border: none;
border-radius: 20px;
padding: 7px;
background-color: #eee6dd;
color: #936f63;
`

export const ToDoHeader = styled.h1`
font-size: 40px;
font-family: 'Montserrat', sans-serif;
`