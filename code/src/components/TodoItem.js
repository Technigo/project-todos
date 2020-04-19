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
      <Divider>
        <Input
          type="checkbox"
          onChange={handleOnChange}
          checked={item.done ? true : ""}
        />
        <Description>{item.description}</Description>
      </Divider>
      <Remove onClick={onRemoveClicked}>REMOVE</Remove>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const Divider = styled.div`
  display: flex;
  align-items: baseline;
`;

const Description = styled.h2`
  font-family: "Pangolin", cursive;
  color: #fff;
  font-weight: lighter;
  font-size: 27px;

  margin: 0;

  @media (max-width: 668px) {
    font-size: 20px;
  }
`;

const Input = styled.input`
  height: 20px;
  width: 20px;
  appearance: none;
  border: 2px dashed #fff;
  border-radius: 4px;
  transition-duration: 0.3s;
  background-color: none;
  cursor: pointer;

  &:checked {
    border: 2px solid #fff;
    background-color: #fff;
  }

  &:checked + ${Description} {
    text-decoration: line-through;
  }
  @media (max-width: 668px) {
    height: 12px;
    width: 12px;
  }
`;

const Remove = styled.button`
  font-family: "Pangolin", cursive;
  font-weight: lighter;
  font-size: 16px;
  color: #fff;

  background: none;

  border-radius: 5px;
  border: 2px dashed #fff;
  align-self: baseline;

  &:active {
    background: #2a4034;
  }

  @media (max-width: 668px) {
    font-size: 12px;
  }
`;
