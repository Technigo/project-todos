import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "reducers/todos";

import {
  Heading
} from "styles";

const Header = () => {
  const todosLength = useSelector((state) => state.todos.lists).length;

  const dispatch = useDispatch();

  return (
    <Heading>
      <h1>Todo</h1>
      <div>
        <p>{todosLength} todos</p>
        <button onClick={() => dispatch(todos.actions.clearTodos())}>Clear All</button>
      </div>
    </Heading>
  );
};

export default Header;