/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

// image
import illustration1 from 'assets/images/Coffe call_DrawKit_Vector_Illustrations copy.png';

const InnerWrapper = styled.section`
display: flex;
width: 70vw;
`

const OuterWrapper = styled.section`
display: flex;
flex-direction: column;
margin: 10px;`

const Title = styled.h3`
font-weight: 700px;
font-size: 60px;
color: #F2B807;
margin-bottom: 20px;
@media (min-width:1024px) {
  font-size: 70px;
}`

export const Illustration = styled.img`
width: 100%;
height: auto;`

export const Header = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Title>To-Do List</Title>
        <Illustration src={illustration1} alt="illustration" />
      </InnerWrapper>
    </OuterWrapper>
  )
}