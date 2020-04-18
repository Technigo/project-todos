import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import styled from "styled-components";

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    //inputValue !== "" removes possibilty to add empty todo
    if (inputValue !== "") {
      e.preventDefault();
      dispatch(
        todos.actions.addTodo({
          description: inputValue,
          done: false,
        })
      );
      console.log(inputValue);
      setInputValue("");
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Let's get some tasks done!"
      ></Input>
      <Button type="submit" value="Add todo"></Button>
    </Form>
  );
};

const Input = styled.input`
  border-radius: 5px;
  border: none;
  margin: 0 5px;
  width: 150px;
  padding: 0 5px;
`;

const Button = styled.input`
  font-family: "Cabin Sketch", cursive;
  font-size: 24px;
  color: #fff;
  font-weight: lighter;
  background: #426452;

  border-radius: 5px;

  &:active {
    background: #2a4034;
  }
`;

const Form = styled.form`
  display: flex;
  margin: 10px 0;
`;
