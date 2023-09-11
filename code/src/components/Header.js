/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro';

// image
import illustration1 from 'assets/images/Coffe call_DrawKit_Vector_Illustrations copy.png';

const Title = styled.h3`
font-weight: 700px;
font-size: 60px;
color: inherit;
margin-bottom: 20px;
@media (min-width:1024px) {
  font-size: 70px;
}`

export const Illustration = styled.img`
width: 100%;
height: auto;
max-width: 200px;
// media queries for desktop
@media (min-width: 769px) {
  max-width: 500px;
  &:hover {
    transform: scale(1.1);
    transition: all 220ms ease-in-out 0s;
  }
}
`

const HeaderContainer = styled.header`
display: flex;
align-items: end;
margin-bottom: 1rem;
@media (min-width: 769px) {
    display: grid;
    grid-template-columns: 18rem 1fr;
    align-items: start;
}
`

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>To-Do List</Title>
      <Illustration src={illustration1} alt="illustration" />
    </HeaderContainer>
  )
}