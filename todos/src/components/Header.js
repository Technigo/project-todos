import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "reducers/todos";
import {
  Heading,
  ClearWrapper,
  Total,
  ClearButton
} from "styles";

import DateStamp from "./DateStamp";

const Header = () => {
  const checkedTodo = useSelector((state) => state.todos.lists);
  const todosLength = useSelector((state) => state.todos.lists).length;
  const completedLength = checkedTodo.filter((todo) => todo.isComplete === true).length;

  const dispatch = useDispatch();

  const displayCompletedTodos = () => {
    if (todosLength === 0) {
      return `${completedLength} completed`;
    } else {
      return `${completedLength} of ${todosLength} completed`;
    }
  };

  return (
    <Heading>
      <h1>To Do List</h1>
      <DateStamp />
      <ClearWrapper>
        <Total>{displayCompletedTodos()}</Total>
        <ClearButton onClick={() => dispatch(todos.actions.clearTodos())}>Clear All</ClearButton>
      </ClearWrapper>
    </Heading>
  );
};

export default Header;