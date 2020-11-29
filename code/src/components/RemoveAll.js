import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
text-align:center;
`
const Button = styled.button`
  color: #3f3f3f;
  font-size: 18px;
  margin: 6px;
  padding: 6px;
  border: 1.5px solid #3f3f3f;
  border-radius: 1.5px;
  text-align:center;
    &:hover {
      background-color:#b83b5e;
      color:white;
      border:white
    }
`
export const RemoveAll = () => {
    const dispatch = useDispatch();
    const handleRemoveAll = () => {
        dispatch(todos.actions.removeAll())
      }
    return (
      <ButtonWrapper>
        <Button 
        onClick={handleRemoveAll} 
        >
        Clear tasks
        </Button>
      </ButtonWrapper>
    );
};