import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeadLineContainer = styled.div`
    background-image: url('./images/stroke.png');
    background-size: cover;
    min-width: 50vw;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeadLine = styled.h1`
    font-family: 'Bosk';
    font-size: 100px;
    color: white;
    text-align: center;
`;

const SmallHeadLine = styled.h2`
    font-family: 'Bosk';
    color: rgb(42, 95, 166);
    background: url('./images/stroke.png') no-repeat center center;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;

const Paragraph = styled.em`
    font-family: 'Avenir-Next-Light';
    text-transform: lowercase;
    color: rgb(42, 95, 166);
`;

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeadLineContainer>
          <HeadLine>just do it </HeadLine>
        </HeadLineContainer>
        <SmallHeadLine>you have 5 things to do</SmallHeadLine>
        <Paragraph>You're never ready for what you have to do. You just do it. That makes you ready.</Paragraph>
      </HeaderContainer>
    </>
  )
}
