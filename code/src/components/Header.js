import React from 'react'

import styled from 'styled-components'

const HeadLine = styled.h1`
    font-family: 'Bosk';
    font-size: 100px;
`;

const SmallHeadLine = styled.h2`
    font-family: 'Bosk';
`;

const Paragraph = styled.em`
    font-family: 'Avenir-Next-Light';
    text-transform: lowercase;
`;

export const Header = () => {
  return (
    <>
      <HeadLine>just do it </HeadLine>
      <SmallHeadLine>you have 5 things to do</SmallHeadLine>
      <Paragraph>You're never ready for what you have to do. You just do it. That makes you ready.</Paragraph>
    </>
  )
}
