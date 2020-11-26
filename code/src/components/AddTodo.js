import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { todos } from "../reducers/todos";

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onItemAdd = () => {
    dispatch(todos.actions.AddTodoItem(input));
    setInput("");
  };

  return (
    <form>
      <label htmlFor="todo-task"></label>
      <input
        id="todo-task"
        type="text"
        value={input}
        onChange={event => setInput(event.target.value)}
        placeholder="Add To Do"
      />
      <input />
      <button type="submit" onClick={onItemAdd} disabled={!input}>
        +
      </button>
    </form>
  );
};

/*
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    //if (tt.lenght >= 0) {
    dispatch(todos.actions.addItem({ input }));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Create task:
        <input type="text" value={input} onChange={setInput()} />
      </label>
      <button type="submit">Add New Task</button>
    </form>
  );
};

*/
