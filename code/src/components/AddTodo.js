import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

import AddTag from "../components/AddTag";
import AddDate from "../components/AddDate";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 90%;
  max-width: 300px;
`;

const InputField = styled.input`
  font-family: inherit;
  display: block;
`;

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <Wrapper>
      <label>
        New todo
        <InputField
          type="text"
          name="newTodo"
          placeholder="Add new todo here..."
          onChange={(event) => setInput(event.target.value)}
        />
      </label>
      <AddDate />
      <AddTag />
      <button onClick={onAddTodo}>Add Todo</button>
    </Wrapper>
  );
};

export default AddTodo;
