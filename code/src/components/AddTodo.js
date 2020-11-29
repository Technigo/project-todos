import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../reducers/todos";

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onItemAdd = () => {
    dispatch(todos.actions.addTodoItem(input));
    setInput("");
  };

  return (
    <Form>
      <label htmlFor="todo-task"></label>
      <TextInput
        id="todo-task"
        type="text"
        value={input}
        onChange={event => setInput(event.target.value)}
        placeholder=" Add New To-Do"
      />
      <AddButton type="submit" onClick={onItemAdd} disabled={!input}>
        +
      </AddButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const AddButton = styled.button`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  font-size: 20px;
  background: ${props => props.background || "#0099ff"};
  color: #fff;
  border: none;
  border-radius: 15px;
  &:hover {
    background: #4dbfed;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const TextInput = styled.input`
  border: 2px solid #0099ff;
  height: 28px;
  width: 80%;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  &::placeholder {
    font-size: 15px;
    font-weight: lighter;
    color: #b3b2b2;
  }

  @media (min-width: 768px) {
    width: 350px;
    height: 38px;
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 38px;
  }
`;
