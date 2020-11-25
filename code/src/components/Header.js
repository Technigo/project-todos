import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "reducers/todos";

export const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.todos.username);

  const handleOnClick = () => {
    const name = prompt("your name");
    dispatch(todos.actions.setUserName(name));
  };

  return (
    <div>
      <h1>Todo {userName && `${userName}'s`}</h1>
      <button onClick={handleOnClick}>name</button>
    </div>
  );
};
