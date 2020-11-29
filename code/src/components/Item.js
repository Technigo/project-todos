import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { todos } from 'reducers/todos';

const ItemContainer = styled.li`
  display:flex;
  padding: 8px;
  margin: 8px 0;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  width: 80%;
  color: #3f3f3f;
  background-color:#e5c5b5;
  list-style: none;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;
const ListRemoveButton = styled.button`
  font-size: 3vw;
  border:none;
  color: #3f3f3f;
  background-color:#e5c5b5;
`;
const ListCompleteButton = styled.button`
  font-size: 3vw;
  color: #3f3f3f;
  border:none;
  background-color:#e5c5b5;
`;
const Text = styled.text`
align-self: center;
`;

export const Item = ({ id,text,isComplete }) => {
  const dispatch = useDispatch();

  const onCompleteChange = () => {
    dispatch(todos.actions.toggleComplete(id));
  };
  const removeTask = () => {
    dispatch(todos.actions.removeOne(id));
  };

  return (
    <>
      <ItemContainer>
        <ListCompleteButton onClick={onCompleteChange}>
          {isComplete ? "💃" : "🙀"}
        </ListCompleteButton>
        <Text>{text}</Text> 
        <ListRemoveButton onClick={removeTask}>
        ⓧ
        </ListRemoveButton>
      </ItemContainer>
    </>
  )
};
