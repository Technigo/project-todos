import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "../reducers/todos.js";
import styled from "styled-components";

export const TodoItem = ({ itemIndex }) => {
  const item = useSelector((store) => store.todos.list.items[itemIndex]);

  const dispatch = useDispatch();

  const onRemoveClicked = (e) => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex,
      })
    );
  };

  const handleOnChange = (e) => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done,
      })
    );
  };

  return (
    <TodoContainer>
      <Input
        type="checkbox"
        onChange={handleOnChange}
        checked={item.done ? "checked" : ""}
      ></Input>
      <Description>{item.description}</Description>
      <Remove onClick={onRemoveClicked}>REMOVE</Remove>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  margin: 20px;

  display: flex;
  align-items: baseline;
  justify-content: space-between;

  width: 80%;
`;

const Description = styled.h2`
  margin: 0;

  font-family: "Helvetica";
  font-size: 22px;
  font-weight: lighter;
`;

const Input = styled.input`
  height: 20px;
  width: 20px;

  appearance: none;

  border: 2px solid #e92272;
  border-radius: 50%;

  transition-duration: 0.3s;

  background-color: none;
  cursor: pointer;
  &:checked {
    background-color: #e92272;
  }
  &:checked + ${Description} {
    text-decoration: line-through;
  }
`;

const Remove = styled.button`
  height: 22px;

  font-family: "Helvetica";
  font-size: 16px;
  font-weight: lighter;

  color: #fff;
  background: #e92272;

  border: none;

  align-self: baseline;
  &:active {
    background: #fbd2e4;
  }
`;
