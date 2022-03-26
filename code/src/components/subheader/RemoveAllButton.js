import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
//importing reducer required for sending info via dispatch
import todos from "../../reducers/todos";

const RemoveButton = styled.button`
  background-color: #b35900;
  color: whitesmoke;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  margin:5px 0px 15px;

  &:hover {
    background-color: #1499DA;
    color:#1930BF;
    font-weight:bolder;
    transition: all 0.3s ease;
    transform: scale(1.1, 1.2);
  }
  @media(min-width: 500px) {
    font-size: 1rem;
    margin: 10px 10px 20px;

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
