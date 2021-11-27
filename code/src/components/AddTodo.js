import React, { useState } from "react";
import { useDispatch } from "react-redux"; // in order to trigger an action, need useDispatch and the slice itself
import styled from "styled-components/macro";

import todos from "../reducers/todos";

//stlying
const AddContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  cursor: pointer;
  margin-bottom: 15px;
`;
const Addbutton = styled.button`
  margin-right: 10px;
  border: none;
  width: 20%;
  justify-content: flex-end;
  background: white;
  color: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
const Plus = styled.img`
  width: 25px;
`;
const TaskInput = styled.input`
  border: none;
  width: 80%;
  font-size: 16px;
  margin-left: 30px;
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: #cfd0d0;
    font-size: 20px;
    margin-left: 30px;
  }
`;

const AddTodo = () => {
  const [input, setInput] = useState(""); // using the local state here to set the input....more convenient than using global state
  const dispatch = useDispatch(); // always needed

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
    setInput("");
    // This is the function which is invoked when you click the button to add a to-do
    // the setInput('') clears the input field when button is clicked
  };

  return (
    <AddContainer>
      <TaskInput
        type="text"
        placeholder="Add your task"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <Addbutton onClick={onAddTodo}>
        <Plus src="assets/add.png" />{" "}
      </Addbutton>
    </AddContainer>
  );
};

export default AddTodo;
