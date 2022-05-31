import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid";

import todos from "reducers/todos";

const SubmitButton = styled.button`
  curson: pointer;
  height: 30px;
  width: 60px;
  font-family: "Kalam", cursive;
  font-weight: 80px;
  border: none;
`;

const Inputfield = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  margin-bottom: 19px;
  margin-top: 24px;
`;

const AddTodo = () => {
  const [inputValue, setInputvalue] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uniqid(),
      Todo: inputValue,
      isDone: false,
    };

    dispatch(todos.actions.addItem(newTodo));
    setInputvalue("");
  };

  return (
    <Inputfield className="inputwrapper">
      <form onSubmit={onFormSubmit}>
        <label>
          &nbsp;
          <input
            type="text"
            required
            value={inputValue}
            onChange={(e) => setInputvalue(e.target.value)}
          />
          &nbsp;
        </label>
        <SubmitButton type="submit">Add</SubmitButton>
      </form>
    </Inputfield>
  );
};

export default AddTodo;
