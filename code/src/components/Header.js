// import { iteratorSymbol } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

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
  margin: 10px auto;
  @media (min-width: 700px) {
    height: 100px;
    width: 70%;
    margin: 30px auto;
  }
  @media (min-width: 1100px) {
    height: 100px;
    width: 50%;
    margin: 50px auto;
  }
`;

const HeaderTitle = styled.h1`
  color: hotpink;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  @media (min-width: 700px) {
    font-size: 34px;
  }
`;

const DateText = styled.p`
  color: hotpink;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  @media (min-width: 700px) {
    font-size: 34px;
  }
`;
