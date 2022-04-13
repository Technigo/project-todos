import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import todos from "reducers/todos";

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

    dispatch(todos.actions.addToDo(newTodo));

    setInputValue("");
  };

  return (
    <form onSubmit={handleTodoSubmit}>
      <input 
        type="text" 
        placeholder="Add todo"
        value={inputValue}
        onChange={(event) => {setInputValue(event.target.value)}}
      />
      <button 
        type="submit"
        onClick={handleNewTodo}
      >+
      </button>
    </form>
  );
};

export default AddTodos;