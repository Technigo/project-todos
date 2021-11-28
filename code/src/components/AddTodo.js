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
  width: 90%;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const AddTodoText = styled.input`
  width: 75%;
  height: 75%;
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
  text-align: center;
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
  text-shadow: 1px 1px 1px black;
  width: 18%;
  height: 80%;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #00bf72;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));

    setInput("");
  };

  return (
    <AddTodoContainer>
      <AddTodoText
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <AddTodoButton onClick={onAddTodo}>Add</AddTodoButton>
    </AddTodoContainer>
  );
};

export default AddTodo;
