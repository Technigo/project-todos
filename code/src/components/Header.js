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
@media (min-width: 769px) {
  font-size: 65px;
};
@media (min-width:1025px) {
  font-size: 70px;
}`

export const Illustration = styled.img`
width: 100%;
height: auto;
max-width: 200px;
`

const HeaderContainer = styled.header`
display: flex;
align-items: center;
margin-bottom: 1rem;
@media (min-width: 769px) {
  align-items: flex-start;
  position: relative;
  top: 20px;
  margin-bottom: 3rem;
};
`

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>To-Do List</Title>
      <Illustration src={illustration1} alt="illustration" />
    </HeaderContainer>
  )
}