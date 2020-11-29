import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoItem } from "components/TodoItem";
import styled from "styled-components";
import { todos } from "reducers/todos";
import moment from "moment";

const RemoveButton = styled.button`
  width: 100px;

  border-radius: 5px;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  return (
    <>
      {items.map((item) => (
        <TodoItem key={item.id} id={item.id} item={item} />
      ))}
      <ButtonContainer>
        <RemoveButton onClick={() => dispatch(todos.actions.removeAll())}>
          Remove all todos
        </RemoveButton>
      </ButtonContainer>
    </>
  );
};
