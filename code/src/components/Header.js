import React from "react";
import styled from "styled-components";

import Counter from "components/Counter";

const HeaderContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: grey;
`;

const Header = () => {
  return (
    <HeaderContainer>
      Todo:
      <Counter />
    </HeaderContainer>
  );
};

export default Header;
