import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const CompleteButtonStyle = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.inputBackground};
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 10px;
  width: 280px;

  button {
    background-color: ${(props) => props.theme.buttonBackground};
    color: ${(props) => props.theme.inputBackground};
    border: none;
    border-radius: 10px;
    font-weight: bold;
    padding: 5px;
    margin: 0 5px;
  }

  button:hover {
    cursor: pointer;
    color: white;
    transition: 0.1s;
  }
`;

const CompleteButtons = () => {
  const dispatch = useDispatch();

  const onDeleteAll = () => {
    dispatch(todos.actions.removeAll());
  };

  const onCompleteAll = () => {
    dispatch(todos.actions.toggleAllTodo());
  };

  const onUnCompleteAll = () => {
    dispatch(todos.actions.toggleAllTodoBack());
  };

  return (
    <CompleteButtonStyle>
      <button onClick={onCompleteAll}>check all</button>
      <button onClick={onUnCompleteAll}>uncheck all</button>
      <button onClick={onDeleteAll}>delete all</button>
    </CompleteButtonStyle>
  );
};

export default CompleteButtons;
