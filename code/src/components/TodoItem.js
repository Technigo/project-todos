import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import styled from "styled-components";

export const TodoItem = ({ itemIndex }) => {
  const item = useSelector((store) => store.todos.list.items[itemIndex]);
  const dispatch = useDispatch();

  const onRemoveClicked = (event) => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex,
      })
    );
  };

  const handleOnChange = (event) => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done,
      })
    );
  };

  return (
    <TodoContainer>
      <input
        type="checkbox"
        onChange={handleOnChange}
        checked={item.done ? true : ""}
      />
      <p>{item.description}</p>
      <Remove onClick={onRemoveClicked}>REMOVE</Remove>
    </TodoContainer>
  );
};

const Remove = styled.button``;

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
`;
