import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../reducers/todos";

export const DeleteTodoButton = ({ item }) => {
  const items = useSelector(store => store.todos.items);
  const dispatch = useDispatch();

  const onTodoDelete = id => {
    dispatch(todos.actions.removeTodoItem(id));
  };

  return (
    <DeleteButton type="button" onClick={() => onTodoDelete(item.id)}>
      X
    </DeleteButton>
  );
};

const DeleteButton = styled.button`
  align-self: center;
  width: 30px;
  height: 30px;
  margin-left: 4px;
  font-size: 16px;
  background: ${props => props.background || "red"};
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #b22222;
    cursor: pointer;
  }
`;
