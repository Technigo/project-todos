import React from "react";
import styled from "styled-components";

import moment from "moment";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>to do list!</Title>
      <Date>{moment().format("dddd, Do MMMM")}</Date>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  text-align: center;
  background-image: url(./blue.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 20vh;
  width: 100%;
`;

const Title = styled.h2`
  font-family: "League Script", cursive;
  color: #d7f0ed;
  font-size: 50px;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 70px;
    margin-bottom: 0;
  }
`;

const Date = styled.h6`
  color: #d7f0ed;
  font-size: 16px;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 24px;
  }
`;
