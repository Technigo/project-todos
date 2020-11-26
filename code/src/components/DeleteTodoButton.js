import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "../reducers/todos";

export const DeleteTodoButton = () => {
  const items = useSelector(store => store.todos.items);
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(todos.actions.removeItem())}>
      Delete component
    </button>
  );
};

/*import styled from "styled-components";

export const Button = styled.button`
  padding: 10px;
  margin: 5px;
  background: ${(props) => props.background || "yellow"};
  font-size: 18px;
  border: none;
  border-radius: 10px;

  &:hover {
    background: black;
    color: white;
    #b8f4ff - blue
  }

  @media (min-width: 600px){
    width: 100%;
  }
`; */
