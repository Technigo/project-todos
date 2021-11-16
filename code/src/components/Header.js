import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: grey;
`;

const Header = () => {
  return <HeaderContainer>Todo:</HeaderContainer>;
};

export default Header;
