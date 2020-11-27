import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';


const DeleteButton = styled.button`
  align-self: flex-end;
  padding: 4px;
  background-color: black;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
  color: whitesmoke;
  border: none;
  border-radius: 2px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const DeleteTodos = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <DeleteButton
        onClick={() => {
          dispatch(todos.actions.DeleteTodos())
        }}
      >
        Delete all
      </DeleteButton>
    </Container>

  )
};

