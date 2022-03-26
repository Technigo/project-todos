import React from "react";
import styled from "styled-components";

const AddButton = styled.button`
  border: none;
  padding: 0.5rem;
  margin: 5px 0 10px;
  background-color: rgb(201, 204, 213);
  cursor: pointer;
  color: #b35900;
  transition: all 0.3s ease;
  border-radius: 0 5px 5px 0;
  font-size: 0.8rem;
  &:hover {
    background-color: #b35900;
    color: rgb(223, 212, 212);
  }
  @media (min-width: 500px) {
    font-size: 1.2rem;
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
