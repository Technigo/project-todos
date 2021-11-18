import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const CompleteButton = styled.button`
  background: none;
  border: none;
  height: 25px;

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &:hover {
    color: lightgreen;
  }
`;

const CompleteAllButton = () => {
  const dispatch = useDispatch();

  const completeAll = () => {
    dispatch(todos.actions.checkAllTodos());
  };

  return (
    <CompleteButton onClick={completeAll}>
      <i className="fas fa-check"></i> all
    </CompleteButton>
  );
};

export default CompleteAllButton;
