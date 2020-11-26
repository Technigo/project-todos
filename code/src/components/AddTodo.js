import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

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
      <TextInput
        id="todo-task"
        type="text"
        value={input}
        onChange={event => setInput(event.target.value)}
        placeholder="Add To Do..."
      />
      <AddButton type="submit" onClick={onItemAdd} disabled={!input}>
        +
      </AddButton>
    </form>
  );
};

const AddButton = styled.button`
  align-self: center;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  font-size: 20px;
  background: ${props => props.background || "#0099ff"};
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #4dbfed;
  }
`;

const TextInput = styled.input`
  border: 2px solid #0099ff;
  height: 28px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  &::placeholder {
    font-size: 15px;
    font-weight: lighter;
    color: #999999;
  }
`;

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
