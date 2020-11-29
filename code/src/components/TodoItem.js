import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import moment from "moment";

const ItemContainer = styled.div`
  padding: 8px;
  margin: 25px;
  margin-bottom: 2px;
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
  :checked {
    text-decoration: line-through;
  }
`;

const DeleteButton = styled.span``;

const TimeStamp = styled.span`
  display: flex;
  justify-content: flex-end;
  color: #266150;
  margin-right: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
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
        <ItemText
          style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
        >
          {item.text}
        </ItemText>
        <ButtonContainer>
          <TodoComplete
            type="checkbox"
            onClick={onIsCompletedChange}
          ></TodoComplete>
          <DeleteButton onClick={onItemDelete}>ⓧ</DeleteButton>
        </ButtonContainer>
      </ItemContainer>
      <TimeStamp>{moment(item.created).fromNow()}</TimeStamp>
    </>
  );
};
