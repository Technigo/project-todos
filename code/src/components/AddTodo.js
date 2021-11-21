import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

//a reducer required for sending info via dispatch
import todos from "../reducers/todos";


//Styled component
const InputWrapper = styled.div`
  position: absolute;
  top: 20px;
  width: 95%;
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
    width: 95%;
    border-radius: 5px 0 0 5px;
    color: rgb(0, 30, 108);
  }
  .todo-btn {
    cursor: pointer;
    color:#b35900;
    transition: all 0.3s ease;
    border-radius: 0 5px 5px 0;
  }
  .todo-btn:hover {
    background-color: #b35900;
    color: rgb(223, 212, 212);
  }

  @media (min-width: 600px) {
  margin: 0 auto;
  max-width: 500px;
}
`;

const AddTodo = () => {
  // This function is responsible for sending the input's value to the addTodo reducer.
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); // sends the info to the reducers

  //function btn
  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input)); //input replace the action parameter
    setInput(""); //clears the input
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
        <i className="fas fa-plus-square"></i>
      </button>
    </InputWrapper>
  );
};

export default AddTodo;
