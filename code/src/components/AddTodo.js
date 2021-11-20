import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import todos from "../reducers/todos";

import AddTag from "../components/AddTag";
import AddDate from "../components/AddDate";
import AddProject from "./AddProject";

const { DateTime } = require("luxon");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  max-width: 300px;
`;

const InputField = styled.input`
  font-family: inherit;
  display: block;
`;

const Button = styled.button`
  position: relative;
  display: inline-block;
  margin: 10px;
  padding: 10px 10px;
  text-align: center;
  font-family: inherit;
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #725ac1;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border-radius: 30px;
  border: 2px solid #725ac1;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #725ac1;
  width: max-content;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #725ac1;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [newProject, setNewProject] = useState("");
  const [newDate, setNewDate] = useState(new Date());
  const [newTags, setNewTags] = useState([]);

  const dispatch = useDispatch();

  const onAddTodo = () => {
    const dateAdded = DateTime.now();
    setNewTodo("");
    setNewDate(new Date());
    setNewTags([]);
    setNewProject("");
    let todoObject = {
      newTodo,
      newProject,
      newDate,
      newTags,
      dateAdded,
    };
    dispatch(todos.actions.addTodo(todoObject));
  };

  return (
    <Wrapper>
      <label>
        New todo
        <InputField
          type="text"
          name="newTodo"
          placeholder="Add new todo here..."
          value={newTodo}
          onChange={(todo) => setNewTodo(todo.target.value)}
        />
      </label>
      <AddProject
        setNewProject={setNewProject}
        newProject={newProject}
      />
      <AddDate setNewDate={setNewDate} newDate={newDate} />
      <AddTag setNewTags={setNewTags} newTags={newTags} />
      <Button onClick={onAddTodo}>Add Todo</Button>
    </Wrapper>
  );
};

export default AddTodo;
