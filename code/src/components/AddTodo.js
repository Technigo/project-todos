import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components/macro";

import todos from "../reducers/todos";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <>
      <StyledTextInput
        type="text"
        value={input}
        placeholder="Put your to do here..."
        onChange={(event) => setInput(event.target.value)}
      />
      <ButtonInput onClick={() => onAddTodo(input)}>
        <FaPlus />
      </ButtonInput>
    </>
  );
};

const ButtonInput = styled.button`
  margin-left: 10px;
  margin-top: 10px;
  height: 30px;
  width: 30px;
  background-color: rgb(109, 100, 100);
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

// const Svg = styled.svg`
//   @media (min-width: 768px) {
//     height: 100px;
//     width: 100px;
//   }
// `;
const StyledTextInput = styled.input`
  border: none;
  margin-left: 20px;
  width: 70%;
  background: rgba(233, 181, 181, 0.6);
  transition: 0.5s ease;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: rgb(109, 100, 100);
  font-size: 16px;

  &::placeholder {
    color: rgb(109, 100, 100);
  }
  @media (min-width: 768px) {
    font-size: 25px;
    padding: 20px;
    margin-left: 90px;
    margin-bottom: 20px;
  }
`;

export default AddTodo;
