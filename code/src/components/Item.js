import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../reducers/todos";
import { DeleteTodoButton } from "./DeleteTodoButton";

const ItemContainer = styled.li`
  align-self: flex-start;
  padding: 8px;
  margin: 10px;
  font-size: 18px;
  color: #3f3f3f;
  background-color: #e8e8e8;
  border-bottom: 1px solid gray;
  list-style-type: none;
`;

export const Item = ({ item }) => {
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
      {item.text}
      <span>{item.isComplete ? "Completed" : "ToDo"}</span>
    </ItemContainer>
  );
};
