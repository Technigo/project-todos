import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import todos from "reducers/todos";

import {
  Form,
  AddTodo,
  Plus,
  AddButton
} from "styles";

const handleTodoSubmit = (event) => {
  event.preventDefault();
};

const AddTodos = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleNewTodo = () => {
    const newTodo = {
      id: uniqid(),
      text: inputValue,
      isComplete: false,
      createdAt: JSON.stringify(Date.now())
    };

    dispatch(todos.actions.addTodo(newTodo));

    setInputValue("");
  };

  return (
    <Form onSubmit={handleTodoSubmit}>
      <AddTodo
        type="text"
        placeholder="Add todo"
        value={inputValue}
        onChange={(event) => { setInputValue(event.target.value); }} />
      <AddButton
        type="submit"
        disabled={!inputValue}
        onClick={handleNewTodo}>
          <Plus disabled={!inputValue}>+</Plus> Add
      </AddButton>
    </Form>
  );
};

export default AddTodos;