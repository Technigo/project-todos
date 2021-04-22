import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import styled from 'styled-components';
import { FaTrashAlt } from "react-icons/fa";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Btn = styled.button`
  background-color: #D81159;
  color: white;
  border: none;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid #D81159;
  border-radius: 30px;
  padding: 10px 20px;
  margin: 30px 20px 20px 0;
`;

const Bin = styled(FaTrashAlt)`
  color: white;
  margin-right: 5px;
  font-size: 15px;
`;

export const ClearCompletedBtn = () => {
  const dispatch = useDispatch();

  return (
    <Div>
      <Btn
        type="button"  
        onClick={() => dispatch(todos.actions.clearCompleted())}
        aria-label="Clear all items"
      >
        <Bin />
          Clear
      </Btn>
    </Div>
  )
}