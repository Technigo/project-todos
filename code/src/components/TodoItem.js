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
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.h2`
  font-family: "Cabin Sketch", cursive;
  color: #fff;
  font-weight: lighter;

  margin: 0;
`;

const Input = styled.input`
  &:checked + ${Description} {
    text-decoration: line-through;
  }
`;

const Remove = styled.button`
  font-family: "Cabin Sketch", cursive;
  color: #fff;
  font-weight: lighter;
  background: #426452;

  border-radius: 5px;
  font-size: 16px;

  &:active {
    background: #2a4034;
  }
`;
