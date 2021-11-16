import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWavePulse,
  faBusinessTime,
  faFamily,
} from "@fortawesome/pro-light-svg-icons";

export const TodoListItem = ({ todo }) => {
  return (
    <Item>
      <IconContainer>
        {todo.category === "activity" && <FontAwesomeIcon icon={faWavePulse} />}
        {todo.category === "business" && (
          <FontAwesomeIcon icon={faBusinessTime} />
        )}
        {todo.category === "family" && <FontAwesomeIcon icon={faFamily} />}
      </IconContainer>
      <ItemHeaderLocationContainer>
        <ItemHeader>{todo.title}</ItemHeader>
        <ItemLocation>{todo.adress}</ItemLocation>
      </ItemHeaderLocationContainer>
      <ItemTimer>{todo.time}</ItemTimer>
    </Item>
  );
};

const Item = styled.div`
  border-bottom: solid 1px #c9cbd4;
  padding-bottom: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d2d3db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const ItemHeaderLocationContainer = styled.div``;

const ItemHeader = styled.div`
  font-size: 16px;
`;
const ItemLocation = styled.div`
  color: #d2d3db;
  font-size: 14px;
`;
const ItemTimer = styled.div`
  color: #d2d3db;
  font-size: 14px;
`;
