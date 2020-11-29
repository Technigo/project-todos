import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import moment from "moment";

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

const ItemText = styled.div``;

const TodoComplete = styled.input`
  :after {
    text-decoration: line-through;
  }
`;

export const TodoItem = ({ id, item, isCompleted }) => {
  const dispatch = useDispatch();
  const onItemDelete = () => {
    dispatch(todos.actions.removeItem(id));
  };

  const onIsCompletedChange = () => {
    dispatch(todos.actions.toggleComplete(id));
  };

  return (
    <>
      <ItemContainer>
        <ItemText>{item.text}</ItemText>
        <TodoComplete
          type="checkbox"
          onClick={onIsCompletedChange}
        ></TodoComplete>
        <div onClick={onItemDelete}>ⓧ</div>
      </ItemContainer>
      <span>{moment(item.createdAt).fromNow()}</span>
    </>
  );
};
