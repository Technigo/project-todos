import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import styled from 'styled-components';
import { FaTrashAlt } from "react-icons/fa";

const Btn = styled.button`
  background-color: white;
  border: none;
  margin-left: 8%;
  position: absolute;
  bottom: 5%;
  right: 10%;
`;

export const ClearAllBtn = () => {
  const dispatch = useDispatch();

  return (
    <Btn
      type="button"  
      onClick={() => dispatch(todos.actions.clearAll())}
      aria-label="Clear all items"
    >
      <FaTrashAlt />
        Clear All
    </Btn>
  )
}