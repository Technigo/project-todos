import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../reducers/todos";
import { DeleteTodoButton } from "./DeleteTodoButton";

export const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = isComplete => {
    dispatch(todos.actions.toggleIsComplete(item.id));
  };

  return (
    <ItemContainer>
      <label htmlFor="is-task-complete"></label>
      <input
        id="is-task-complete"
        type="checkbox"
        checked={item.isComplete}
        onChange={() => handleCheckboxClick(item.isComplete)}
      />
      <TodoText>{item.text} </TodoText>
      <Span>{item.isComplete ? "Completed" : "ToDo"}</Span>
    </ItemContainer>
  );
};

const ItemContainer = styled.article`
  /*align-self: flex-start;*/
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  margin: 2px;
  font-size: 16px;
  color: #3f3f3f;
  background-color: #fff;
  border-top: 1px solid #474747;
  border-bottom: 1px solid #474747;
  position: relative;
`;

const TodoText = styled.p`
  margin-left: 15px;
  font-weight: 500;
`;

const Span = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #0075ff;
  position: absolute;
  right: 10px;
`;
