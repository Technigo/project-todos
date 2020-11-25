import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  background: #2A3330;
`;

const Heading = styled.h1`
  font-size: 72px;
  align-self: center;
  text-transform: uppercase;
  color: white;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Heading>To read</Heading>
    </HeaderContainer>
  );
};
