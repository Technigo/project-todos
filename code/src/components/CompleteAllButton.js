import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const CompleteButton = styled.button`
  background: none;
  border: none;
  height: 25px;
  cursor: pointer;
  font-size: 20px;
  font-family: "Caveat", cursive;

  @media (min-width: 768px) {
    height: 40px;
    font-size: 30px;
    margin-right: 10px;
  }

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
