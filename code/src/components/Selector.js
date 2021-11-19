import React from "react";

import { useDispatch } from "react-redux";

import todo from "../reducers/todo";

const Selector = () => {
  const dispatch = useDispatch();

  return (
    <div className="selector-wrapper">
      <select
        className="sortby-selector"
        id="selector"
        onChange={(event) => {
          dispatch(todo.actions.setFilter(event.target.value));
        }}
        required
      >
        <option value="date added">Date added</option>
        <option value="date due">Due date</option>
        <option value="uncompleted">Uncompleted first</option>
        <option value="category">By category</option>
      </select>
    </div>
  );
};

export default Selector;
