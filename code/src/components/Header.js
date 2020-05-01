import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-image: url('./images/banner.png');
    background-size: cover;
    background-position-y: bottom;
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0 0;
`;

const HeadLine = styled.h1`
    font-family: 'Malina1';
    font-size: 90px;
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
    margin-top: -55px;
    margin-right: -15px;
`;

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeadLine>workflow</HeadLine>
        <Paragraph>you are what you do, not what you say you'll do.</Paragraph>
      </HeaderContainer>
    </>
  )
}
