import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-image: url('./images/stroke.png');
    background-size: cover;
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeadLine = styled.h1`
    font-family: 'Bosk';
    font-size: 110px;
    color: white;
    text-align: center;
`;

const Paragraph = styled.em`
    font-family: 'Avenir-Next-Light';
    text-transform: lowercase;
    color: white;
    text-align: center;
    font-size: 14px;
    max-width: 80%;
    margin-top: -25px;
    margin-right: -15px;
`;

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeadLine>just do it </HeadLine>
        <Paragraph>you are what you do, not what you say you'll do.</Paragraph>
      </HeaderContainer>
    </>
  )
}
