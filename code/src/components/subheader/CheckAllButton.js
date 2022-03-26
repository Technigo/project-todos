import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
//importing reducer required for sending info via dispatch
import todos from "../../reducers/todos";

const CheckButton = styled.button`
  background-color: #b35900;
  color: whitesmoke;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  margin: 10px 0px 5px;

  &:hover {
    background-color: #1499da;
    color: #1930bf;
    font-weight: bolder;
    transition: all 0.3s ease;
    transform: scale(1.1, 1.2);
  }
  @media (min-width: 500px) {
    font-size: 1rem;
    margin: 10px 10px 20px;
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
