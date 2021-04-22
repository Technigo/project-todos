import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { todos } from '../reducers/todos';
import { FaCheckCircle } from "react-icons/fa";

const Button = styled.button`
  background-color: black;
  border: none;
  position: absolute;
  top: 5%;
  right: 5%;
`;

const Check = styled(FaCheckCircle)`
  color: red;
  font-size: 20px;
`;

export const MarkCompleteBtn = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        type="button"  
        onClick={() => dispatch(todos.actions.markAllComplete())}
        aria-label="Mark all items as completed"
        >
        <Check />
      </Button>
    </div>
  )
}
