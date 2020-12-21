import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  background: #2a344a;
`;

const Heading = styled.h1`
  align-self: center;
  font-size: 72px;
  color: #fdfff3;
  text-transform: uppercase;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Heading>To read</Heading>
    </HeaderContainer>
  );
};
