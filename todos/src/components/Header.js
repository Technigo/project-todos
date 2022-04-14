import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "reducers/todos";
import DateStamp from "./DateStamp";

import {
  Heading,
  ClearWrapper,
  Total,
  ClearButton
} from "styles";

const Header = () => {
  const todosLength = useSelector((state) => state.todos.lists).length;

  const dispatch = useDispatch();

  return (
    <Heading>
      <h1>To Do List</h1>
      <DateStamp /> 
      <ClearWrapper>
        <Total>{todosLength} todos</Total>
        <ClearButton onClick={() => dispatch(todos.actions.clearTodos())}>Clear All</ClearButton>
      </ClearWrapper>
    </Heading>
  );
};

export default Header;