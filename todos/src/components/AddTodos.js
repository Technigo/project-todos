import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import todos from "reducers/todos";

import {
  Form,
  Input,
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
      isComplete: false
    };

    dispatch(todos.actions.addTodo(newTodo));

    setInputValue("");
  };

  return (
    <Form onSubmit={handleTodoSubmit}>
      <Input
        type="text"
        placeholder="Add todo"
        value={inputValue}
        onChange={(event) => { setInputValue(event.target.value) }}
      />
      <AddButton
        type="submit"
        disabled={!inputValue}
        onClick={handleNewTodo}
      ><Plus>+</Plus> Add
      </AddButton>
    </Form>
  );
};

export default AddTodos;