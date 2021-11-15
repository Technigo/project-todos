import React from "react";
import styled from "styled-components";

const date = new Date();
// const day = date.getDate();
// const month = date.getMonth() + 1;
// const year = date.getFullYear();
const todaysDate = date.toString().slice(0, 10);

//console.log("the date:", todaysDate);

export const Header = () => {
  return (
    <HeaderDiv>
      <HeaderTitle>Today's Tasks</HeaderTitle>
      <DateText>{todaysDate}</DateText>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 50px;
  margin: auto;

  @media (min-width: 700px) {
    height: 100px;
  }
`;

const HeaderTitle = styled.h1`
  color: hotpink;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
`;

const DateText = styled.p`
  color: hotpink;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
`;
