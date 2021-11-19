import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const DeleteButton = styled.button`
  background: none;
  border: none;
  height: 25px;
  cursor: pointer;
  font-size: 20px;
  font-family: "Caveat", cursive;

  @media (min-width: 768px) {
    height: 40px;
    font-size: 30px;
  }

  &:hover {
    color: red;
    border-color: red;
  }
`;

const DeleteAllButton = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(todos.actions.deleteAllTodos());
  };

  return (
    <DeleteButton onClick={deleteAll}>
      {" "}
      <i className="far fa-trash-alt"></i> all
    </DeleteButton>
  );
};

export default DeleteAllButton;
