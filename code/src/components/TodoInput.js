import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import styled from "styled-components";

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    //inputValue !== "" removes possibilty to add empty todo
    if (inputValue !== "") {
      e.preventDefault();
      const date = new Date();
      const currentDate = date.getTime();
      dispatch(
        todos.actions.addTodo({
          description: inputValue,
          done: false,
          date: currentDate,
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
  background: none;

  border-radius: 5px;
  border: 2px dashed #fff;

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
  margin-bottom: 15px;

  @media (max-width: 668px) {
    flex-direction: column;
    margin: 0 10px;
    height: 130px;
    width: 150px;
  }
`;
