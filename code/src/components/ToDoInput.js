import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos.js";
import styled from "styled-components";

export const TodoInput = ({ listId }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(
      todos.actions.addTodo({
        listId: listId,
        itemInfo: { description: inputValue, done: false },
      })
    );

    setInputValue("");
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      ></Input>
      <Button type="submit" value="Add Todo"></Button>
    </Form>
  );
};

const Form = styled.form`
  margin: 10px;
  padding: 16px;

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  font-family: "Helvetica";
  font-size: 22px;

  margin: 0 10px;
  padding: 5px;

  border: none;
  border-radius: 4px;

  width: 45%;

  background-color: #e92272;
  color: white;

  box-sizing: border-box;
`;

const Button = styled.input`
  font-family: "Helvetica";
  font-size: 22px;
  font-weight: lighter;

  margin: 0 10px;
  padding: 5px 15px;

  border: none;
  border-radius: 4px;

  
  width: 45%;

  background: 
  #f7b22b;
  &:active {
    background: #e92272;}
    color: #fff;
  }

  box-sizing: border-box;

  cursor: pointer;
`;
