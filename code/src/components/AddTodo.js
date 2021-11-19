import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todos from "../reducers/todos";
import styled from "styled-components";

//Styled component
const InputWrapper = styled.div`
  position: absolute;
  top: 20px;
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .todo-input,
  .todo-btn {
    border: none;
    padding: 0.5rem;
    font-size: 1.2rem;
    background-color: rgb(201, 204, 213);
  }
  .todo-input {
    width: 500px;
    border-radius: 5px 0 0 5px;
    color: rgb(0, 30, 108);
  }
  .todo-btn {
    cursor: pointer;
    color: rgb(253, 140, 4);
    transition: all 0.3s ease;
    border-radius: 0 5px 5px 0;
  }
  .todo-btn:hover {
    background-color: rgb(253, 140, 4);
    color: rgb(223, 212, 212);
  }
`;

const AddTodo = () => {
  // This function is responsible for sending the input's value to the addTodo reducer.
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); // sends the info to the reducers

  //function btn
  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input)); //input replace the action parameter
    setInput("");
  };

  return (
    <InputWrapper>
      <input
        className="todo-input"
        type="text"
        value={input}
        placeholder="Type here your task ..."
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onAddTodo} className="todo-btn">
        {" "}
        <i class="fas fa-plus-square"></i>
      </button>
    </InputWrapper>
  );
};

export default AddTodo;
