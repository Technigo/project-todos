import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
//importing reducer required for sending info via dispatch
import todos from "../../reducers/todos";

const CheckButton = styled.button`
  background-color: #b35900;
  color: whitesmoke;
  padding: 5px 10px;
  margin: 10px 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    background-color: blue;
    color: #ff9933;
    transition: all 0.3s ease;
    transform: scale(1.1, 1.2);
  }
`;

const CheckAllButton = () => {
  //dispatches actions and trigger state changes to the store
  const dispatch = useDispatch();

  return (
    <CheckButton onClick={() => dispatch(todos.actions.completeAllTasks())}>
      Check All
    </CheckButton>
  );
};
export default CheckAllButton;
