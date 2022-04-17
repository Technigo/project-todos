import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { listSlice } from "reducers/listSlice";
import uniqid from "uniqid";
import styled from "styled-components";

const Form = styled.form`
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 0.5fr 3fr 0.5fr;
  min-height: 32px;
`;

const InputText = styled.input`
  font-size: 16px;
  border: none;
  padding-left: 0;
`;

const AddButton = styled.button`
  all: unset;
  display: flex;
  justify-self: center;
  align-self: center;
  width: 20px;
  cursor: pointer;

  &:disabled {
    opacity: 50%;
  }
`;

const AddIcon = styled.img`
  width: 16px;
`;

const AddTask = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      listSlice.actions.addTask({
        id: uniqid(),
        description: inputValue,
        isDone: false,
        createdAt: Date.now(),
      })
    );
    setInputValue("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <AddButton type="submit" disabled={inputValue.length === 0}>
        <AddIcon src="../../images/add.png" alt="add icon" />
      </AddButton>
      <InputText
        type="text"
        id="new task"
        name="new task"
        value={inputValue}
        required
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="Add task"
      />
    </Form>
  );
};

export default AddTask;
