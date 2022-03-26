import React from "react";
import styled from "styled-components";

//Styled component
const Input = styled.input`
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: rgb(201, 204, 213);
  width: 100%;
  border-radius: 5px 0 0 5px;
  color: rgb(0, 30, 108);
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  margin: 5px 0 10px;
  &::placeholder {
    color: rgb(0, 30, 108);
  }
  @media (min-width: 500px) {
    font-size: 1.2rem;
    width: 45%;
  }
`;

const AddTaskInput = ({ taskValue, onSetTaskFunction }) => {
  return (
    <Input
      type="text"
      maxLength="20"
      value={taskValue}
      placeholder="Type your task"
      onChange={onSetTaskFunction}
    />
  );
};
export default AddTaskInput;
