import React, { useState } from "react";
import { useDispatch } from "react-redux";
import tasks from "reducers/todo";
import styled from "styled-components";
import uniqid from "uniqid";

const SubmitButton = styled.button`
  border-radius: 8px;
  padding: 10px 15px;
  font-family: "Architects Daughter", sans-serif;
  font-size: 0.9rem;
`;

const InputArea = styled.input`
  border: 0;
  border-bottom: 3px dashed #fdcb6e;
  background-color: transparent;
  font-family: "Architects Daughter", sans-serif;
  font-size: 1.3rem;
  padding: 10px 15px;
  width: 30%;
  color: #494a4b;
`;

//to define the input we need a function
const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: uniqid(),
      text: inputValue,
      complete: false,
    };

    dispatch(tasks.actions.addItem(newTask));
    setInputValue("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Add new todo: &nbsp;
        <InputArea
          className="Form"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </label>
      <SubmitButton type="submit">Add</SubmitButton>
    </form>
  );
};
export default AddTodo;
