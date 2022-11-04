import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

`

export const Button = styled.button`
color: whitesmoke;
border-radius: 10px;
font-size: 11px;
border: none;
width: 20px;
background-color: #A27DA7;
`

export const InnerWrapper = styled.section`
  max-width: 300px;
  margin: 0 auto;
  background-color: #F7ECDE;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
`

export const ToDoHeader = styled.h1`
font-size: 40px;
font-family: 'Montserrat', sans-serif;
`