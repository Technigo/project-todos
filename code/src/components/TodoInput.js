import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos }   from "../reducers/todos.js";

const FormContainer = styled.form `
    padding: 20px;
    text-align: center;
`;

const FormInput = styled.input `
    padding: 10px 0px 5px 3px;
    font-size: 16px;
    border-radius: 4px;
    position: relative;
    border: 1px solid #fff;
`;

const AddButton = styled.input `
    background:transparent;
    padding:10px 20px;
    border:2px solid #FFFFFF;
    border-radius:4px;
    margin:10px;
    box-sizing: border-box;
    text-decoration:none;
    text-transform:uppercase;
    font-family:'Roboto',sans-serif;
    font-weight:400;
    color:#fff;
    text-align:center;

`;

export const TodoInput = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      todos.actions.addTodo({
        text: inputText,
        isComplete: false,
      })
    )

    setInputText("");
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInput
        type="text"
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
        required
      />
      <AddButton type="submit" value="Add Todo" />
    </FormContainer>
  );
};