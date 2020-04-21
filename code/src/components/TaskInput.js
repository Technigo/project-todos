import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { tasks } from "../reducers/tasks";

import { ButtonAdd } from "../lib/Button";
import styled from "styled-components";

export const TaskInput = () => {
  // change state from text input
  const [inputValue, setInputValue] = useState("");
  // dispatch the actions to save our new task:
  const dispatch = useDispatch();

  // create handleSubmit function with dispatch:
  const handleOnSubmit = (event) => {
    // console.log if the value in the text field is there:
    // console.log(inputValue)
    // prevent page from refreshing itself:
    event.preventDefault();
    // the dispatch function to save new task to store:
    dispatch(
      tasks.actions.addTodo({
        // listId: listId,
        itemInfo: { id: Date.now(), description: inputValue, done: false },
      })
    );
    // clear text field after Submit:
    setInputValue("");
  };

  // create a handle submit function
  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <InputField
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          required
        ></InputField>
        {/* <input
          type="submit"
          className="todo-input-button"
          value="Add Todo"
        ></input>  */}
        <ButtonAdd type="submit" value="Add Todo">
          Add To do
        </ButtonAdd>
      </Form>
    </Container>
  );
};

export const Container = styled.section`
  background: #ccdae9;
  padding: 20px 0px 20px 10px;
`;

export const Form = styled.form`
  margin: 12px;
  display: flex;
  flex: column;
`;

export const InputField = styled.input`
  font-size: 18px;
  width: 50%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
