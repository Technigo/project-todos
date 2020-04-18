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
  padding: 0 5px;
  width: 150px;
  height: 30px;

  box-sizing: border-box;
`;

const Button = styled.input`
  font-family: "Pangolin", cursive;
  font-size: 24px;
  color: #fff;

  margin: 5px;
  padding: 0 5px;
  width: 150px;
  height: 30px;

  font-weight: lighter;
  background: #426452;

  border-radius: 5px;

  &:active {
    background: #2a4034;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  width: 300px;

  @media (max-width: 668px) {
    flex-direction: column;
    margin: 0 10px;
    height: 70px;
    width: 150px;
  }
`;
