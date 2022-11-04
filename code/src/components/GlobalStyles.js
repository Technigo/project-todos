import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

`

export const OuterWrapper = styled.div`
  background-color: #faf6f0;
  min-height: 100vh;
  min-width: 100vw;
`

export const InnerWrapper = styled.section`
  background-color: #d4c7b9;
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 20px;

  @media (max-width: 850px) {
    width: 90%;
  }
`

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