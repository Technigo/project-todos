import React from "react";

import { useDispatch } from "react-redux";

import todo from "../reducers/todo";

const Selector = () => {
  const dispatch = useDispatch();

  return (
    <select
      id="selector"
      onChange={(event) => {
        dispatch(todo.actions.setFilter(event.target.value));
      }}
      required
    >
      <option value="date added">Date added</option>
      <option value="date due">Due date</option>
      <option value="uncompleted">Uncompleted first</option>
    </select>
  );
};

export default Selector;
