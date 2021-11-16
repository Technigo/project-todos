import React from "react";
import styled from "styled-components/macro";
import { CategoryIcon } from "./CategoryIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/pro-light-svg-icons";
import { useDispatch } from "react-redux";
import { todo } from "reducers/todo";

export const TodoListItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <CategoryIcon
        category={item.category}
        completed={item.completed}
        canClick={true}
        id={item.id}
      />
      <ItemHeaderLocationContainer>
        <ItemHeader>{item.title}</ItemHeader>
        <ItemLocation>{item.place}</ItemLocation>
        <ItemTimer>{item.time}</ItemTimer>
      </ItemHeaderLocationContainer>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => dispatch(todo.actions.removeTodo({ id: item.id }))}
      />
    </Item>
  );
};

const Item = styled.div`
  border-bottom: solid 1px #d2d3db;
  padding-bottom: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;
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
