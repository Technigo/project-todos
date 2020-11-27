import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";

const ItemContainer = styled.div`
  padding: 8px;
  margin: 8px;
  font-size: 24px;
  color: #ffff;
  background-color: #266150;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

const RemoveButton = styled.button``;

export const TodoItem = ({ id, item, isCompleted }) => {
  const dispatch = useDispatch();
  const onItemDelete = () => {
    dispatch(todos.actions.removeItem(id));
  };

  const onIsCompletedChange = () => {
    dispatch(todos.actions.toggleComplete(id));
  };

  return (
    <ItemContainer>
      <div>{item.text}</div>
      <div onClick={onIsCompletedChange}>{isCompleted ? "☒" : "☑"}</div>
      <div onClick={onItemDelete}>ⓧ</div>
    </ItemContainer>
  );
};
