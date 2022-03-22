import React from "react";
import styled from "styled-components";

//Styled component
const Input = styled.input`
  border: none;
  padding: 0.5rem;
  font-size: 1.2rem;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 5px 0 0 5px;
  color: rgb(0, 30, 108);
  outline: none;
  cursor: pointer;
`;

const AddTaskInput = ({ taskValue, onSetTaskFunction }) => {
  return (
    <Input
      type="text"
      maxLength='20'
      value={taskValue}
      placeholder="Type here your task ..."
      onChange={onSetTaskFunction}
    />
  );
};
export default AddTaskInput;
