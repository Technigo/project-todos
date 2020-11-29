import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import styled from "styled-components";
import moment from "moment";

const TextContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  border-radius: 5px;
  border: none;
`;

const Date = styled.div`
  font-size: 22px;
  color: #266150;
  margin-top: 25px;
`;

const Button = styled.button`
  margin-bottom: 25px;
  margin-top 5px;
  border-radius: 5px;
  border: none;
`;

export const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  //   const onItemAdd = () => {
  //     dispatch(todos.actions.addItem(value));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault(dispatch(todos.actions.addItem(value)), setValue(""));
  };

  return (
    <TextContainer>
      <Date>{moment().format("ll")}</Date>
      <TextInput
        placeholder="Add todo here...✏️"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        style={{ color: value.length > 18 ? "red" : "black" }}
      />
      <span>{value.length}/18</span>
      <Button
        onClick={handleSubmit}
        disabled={value.length < 1 || value.length > 18 ? true : false}
      >
        Add todo
      </Button>
    </TextContainer>
  );
};
