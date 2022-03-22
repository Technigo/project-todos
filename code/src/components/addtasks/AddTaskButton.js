import React from "react";
import styled from "styled-components";

const AddButton = styled.button`
  border: none;
  padding: 0.5rem;
  font-size: 1.2rem;
  background-color: rgb(201, 204, 213);
  cursor: pointer;
  color: #b35900;
  transition: all 0.3s ease;
  border-radius: 0 5px 5px 0;
  &:hover {
    background-color: #b35900;
    color: rgb(223, 212, 212);
  }
`;

const AddTaskButton = ({ onAddTodoTask }) => {
  return (
    <AddButton onClick={onAddTodoTask}>
      <i className="fas fa-plus-square"></i>
    </AddButton>
  );
};
export default AddTaskButton;
