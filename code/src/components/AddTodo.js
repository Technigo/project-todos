import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import todos from "../reducers/todos";

import AddTag from "../components/AddTag";
import AddDate from "../components/AddDate";
// I have forgotten to change to AddProject, instead it is AddTag. BUT it still works, why? ALso, should have called it prio
import AddProject from "./AddProject";

const { DateTime } = require("luxon");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  max-width: 300px;
`;
const SmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  font-family: inherit;
  display: block;
  height: 36px;
  width: 98%;
  border: rgb(204, 204, 204) solid 1px;
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
  background: rgba(46, 81, 218, 0.3);
  cursor: pointer;
  transition: ease-out 0.5s;
  border-radius: 30px;
  border: 2px solid #725ac1;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #725ac1;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #725ac1;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const AddTodo = ({ setNewAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const [newProject, setNewProject] = useState("");
  const [newDate, setNewDate] = useState(new Date());
  const [newTags, setNewTags] = useState([]);
  const [newLabel, setNewLabel] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = () => {
    if (!newTodo) {
      alert("Hey there, there is no todo! Fill in your todo");
    } else {
      const dateAdded = DateTime.now();

      let todoObject = {
        newTodo,
        newProject,
        newDate,
        newTags,
        dateAdded,
      };
      dispatch(todos.actions.addTodo(todoObject));
      setNewTodo("");
      setNewDate(new Date());
      setNewTags([]);
      setNewProject("");
      setNewLabel("");
      setNewAddTodo(false);
    }
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
      <SmallWrapper>
        {" "}
        <AddProject
          setNewProject={setNewProject}
          newLabel={newLabel}
          setNewLabel={setNewLabel}
        />
        <AddDate setNewDate={setNewDate} newDate={newDate} />
      </SmallWrapper>

      <AddTag setNewTags={setNewTags} newTags={newTags} />
      <Button onClick={onAddTodo}>Add Todo</Button>
    </Wrapper>
  );
};

export default AddTodo;
