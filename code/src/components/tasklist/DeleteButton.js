import React from "react";
import styled from "styled-components";

//Stlyed component
const Button = styled.button`
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  background-color: rgb(147, 181, 198);
  color: rgb(0, 30, 108);
  &:hover {
    color: #b35900;
  }
`;

const DeleteButton = ({ onDeleteTask, itemId }) => {
  return (
    <Button onClick={() => onDeleteTask(itemId)}>
      {" "}
      <i className="fas fa-trash"></i>{" "}
    </Button>
  );
};
export default DeleteButton;
