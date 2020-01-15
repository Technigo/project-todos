import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

import styled from "styled-components";

let taskId = 0;

export const Input = ({ handleClick }) => {
  let [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  handleClick = () => {
    dispatch(
      tasks.actions.addTask({
        text: todoText,
        id: taskId++
      })
    );
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <Field
        type="text"
        placeholder="Add task"
        onChange={e => setTodoText(e.target.value)}
      ></Field>
      <Button type="button" onClick={handleClick}>
        Add task
      </Button>
    </form>
  );
};

const Field = styled.input`
  margin: 1.5rem;
  padding: 0.5rem;
  width: 65%;
  border-radius: 10px;
  border: none;
  @media (min-width: 900px) {
    margin: 3rem;
    width: 55%;
  }
`;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 10px;
  border: orange 1px solid;
  background: black;
  color: white;
  opacity: 0.6;
  @media (min-width: 600px) {
    width: 20%;
  }
`;
