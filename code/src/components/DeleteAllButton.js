import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const DeleteButton = styled.button`
  background: none;
  border: none;
  height: 25px;

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
