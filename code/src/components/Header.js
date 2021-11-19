import React from "react";
import styled from "styled-components";
import moment from "moment";

import Counter from "components/Counter";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #3b8cb4bd;

  text-align: center;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HeaderText = styled.h1`
  font-family: "Lobster", cursive;
  margin-top: 0;

  @media (min-width: 768px) {
    font-size: 38px;
    margin-left: 50px;
    margin-bottom: 0;
  }
  @media (min-width: 1366px) {
    margin-left: 95px;
  }
`;

const DateFormat = styled.p`
  margin-top: 0;
  font-size: 14px;

  @media (min-width: 768px) {
    margin-top: 1em;
    font-size: 16px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Todo List</HeaderText>
      <DateFormat>{moment().format("LL")}</DateFormat>
      <Counter />
    </HeaderContainer>
  );
};

export default Header;
