import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoItem } from "components/TodoItem";
import styled from "styled-components";
import { todos } from "reducers/todos";
import moment from "moment";

const ItemContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const List = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  return (
    <>
      {items.map((item) => (
        <TodoItem key={item.id} id={item.id} item={item} />
      ))}
      <RemoveButton onClick={() => dispatch(todos.actions.removeAll())}>
        Remove all todos
      </RemoveButton>
    </>
  );
};
