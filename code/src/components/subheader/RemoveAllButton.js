import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
//importing reducer required for sending info via dispatch
import todos from "../../reducers/todos";

const RemoveButton = styled.button`
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

const RemoveAllButton = () => {
  //dispatches actions and trigger state changes to the store
  const dispatch = useDispatch();

  return (
    <RemoveButton onClick={() => dispatch(todos.actions.removeAllTasks())}>
      Remove All
    </RemoveButton>
  );
};
export default RemoveAllButton;
