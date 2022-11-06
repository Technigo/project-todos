import React from 'react'

import styled from 'styled-components/macro'

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>made by Nina Berggren </FooterText>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
display: flex;
justify-content: flex-end;
margin-right: -100px;
`;

const FooterText = styled.h2`
  font-family: var(--font-main);
  color: var(--clr-secondary);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-shadow: 
  1px 1px 1px var(--clr-main),
  2px 2px 1px var(--clr-grey);
  transform: rotate(-30deg);
  transform-origin: bottom left;
`;