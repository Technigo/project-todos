import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { Item } from "./Item";
import { todos } from "../reducers/todos";

export const TodoList = () => {
  const items = useSelector(store => store.todos.items);
  const dispatch = useDispatch();

  const onTodoDelete = id => {
    dispatch(todos.actions.removeTodoItem(id));
  };

  return (
    <ListContainer>
      {items.map(item => (
        <div key={item.id}>
          <Item item={item}></Item>
          <DeleteButton onClick={() => onTodoDelete(item.id)}>X</DeleteButton>
        </div>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0;
`;

const DeleteButton = styled.button`
  align-self: center;
  padding: 8px;
  margin: 2px;
  font-size: 16px;
  background: ${props => props.background || "red"};
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background: black;
  }
`;
