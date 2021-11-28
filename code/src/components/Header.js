import React from "react";
import styled from "styled-components";

import LeftTodoCounter from "./LeftTodoCounter";

const HeaderContainer = styled.section`
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  & h1 {
    font-size: 40px;
    margin: 10px;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    width: 300px;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 25vh;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>TO-DO LIST</h1>
      <LeftTodoCounter />
    </HeaderContainer>
  );
};

export default Header;
