import React from "react";
import styled from "styled-components";

import logo from "./scribble-icon-21.jpg";

const HeaderWrapper = styled.article`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const Logo = styled.img`
  height: 80px;
  margin: 30px 0 20px;
`;

export const ListHeader = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Scribble logo" />
    </HeaderWrapper>
  );
};
