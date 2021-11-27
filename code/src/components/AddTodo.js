import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todos from "../reducers/todos";
import styled from "styled-components";

const AddTodoContainer = styled.div`
  display: flex;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 20px;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const TodoText = styled.input`
  width: 70%;
  height: 80%;
  border-radius: 15px;
  outline: none;
  border: none;
  background: transparent;
  border: 2px solid white;
  font-size: 16px;
  color: white;
  padding-left: 10px;
`;

const AddTodoButton = styled.button`
  position: relative;
  display: inline-block;
  height: 85%;
  text-align: center;
  letter-spacing: 1px;
  text-decoration: none;
  font-size: 16px;
  color: white;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border-radius: 30px;
  border: 2px solid white;
  border-radius: 15px;
  box-shadow: inset 0 0 0 0 black;
`;

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <AddTodoContainer>
      <TodoText
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <AddTodoButton onClick={onAddTodo}>Add todo</AddTodoButton>
    </AddTodoContainer>
  );
};

export default AddTodo;
