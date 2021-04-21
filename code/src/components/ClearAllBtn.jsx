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
  background-color: white;
  border: none;
  margin-left: 8%;
  position: absolute;
  bottom: 5%;
  right: 10%;
  margin-bottom: 5px;
`;

const Bin = styled(FaTrashAlt)`
  color: red;
  margin-right: 5px;
  font-size: 20px;
`;

export const ClearAllBtn = () => {
  const dispatch = useDispatch();

  return (
    <Div>
      <Btn
        type="button"  
        onClick={() => dispatch(todos.actions.clearCompleted())}
        aria-label="Clear all items"
      >
        <Bin />
          Clear Completed Items
      </Btn>
    </Div>
  )
}