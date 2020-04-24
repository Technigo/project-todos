import React from "react";
import moment from "moment";
import styled from "styled-components";
import { TodoSummary } from "./ToDoSummary.js";

export const Header = () => {
  return (
    <Content>
      <Title>ToDo </Title>
      <Date>
        <span>{moment().format("dddd MMMM Do")}</span>
      </Date>
      <TodoSummary />
    </Content>
  );
};

const Content = styled.header`
  background: #1acea9;

  margin-bottom: 20px;
  padding: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  border-radius: 4px;

  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: "Helvetica";
  font-size: 100px;
  font-weight: bolder;

  margin: 20px 0 0 0;

  color: #fff;
`;

const Date = styled.h3`
  font-family: "Helvetica";
  font-size: 24px;
  font-weight: bolder;

  margin: 0 0 40px 0;

  color: #fff;
`;
