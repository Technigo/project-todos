import React from "react";

import styled from 'styled-components'

export const Footer = () => {
  return (
    <Container>
      <FooterText>Probably the best To do app in the world</FooterText>
    </Container>
  )
}

export const Container = styled.div`

  text-align: center;
  border-bottom: 1px solid #EBEEEF;
  /* opacity: 100%; */
  /* background-color: #46539e; */
  padding-top: 1px;
`;
 
export const FooterText = styled.h3`
  font-weight: 100;
  font-size: 10px;
  color: #46539e;
  opacity: 40%;
`;