import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid";

import todos from "reducers/todos";

const AddTodo = () => {
  const [inputValue, setInputvalue] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventdDfault();
  };

  const newTodo = {
    id: uniqid(),
    name: inputValue,
    isDone: false,
  };

  dispatch(todos.actions.addItem(newTodo));

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        New things to do : &nbsp;
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputvalue(e.target.value)}
        />
      </label>
      <button type="submit">Add thing to do</button>
    </form>
  );
};

export default AddTodo;
