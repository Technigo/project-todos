import React from "react";
import styled from "styled-components";

import Counter from "components/Counter";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #3b8cb4;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Todo:</h1>
      <Counter />
    </HeaderContainer>
  );
};

export default Header;
