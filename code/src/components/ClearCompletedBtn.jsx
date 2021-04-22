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
  background-color: red;
  color: white;
  border: none;
  margin-left: 8%;
  position: absolute;
  bottom: 4%;
  right: 10%;
  margin-bottom: 5px;
  font-size: 15px;
  border: 1px solid red;
  border-radius: 30px;
  padding: 10px 20px;
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