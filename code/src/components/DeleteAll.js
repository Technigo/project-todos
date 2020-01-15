import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

import styled from "styled-components";

export const DeleteAll = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(tasks.actions.deleteAll());
  };
  return (
    <Button type="button" onClick={handleClick}>
      <P>Delete all todos</P>
      <ion-icon name="close-circle" style={{ color: "red" }}></ion-icon>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-content: center;
  background: black;
  border: none;
  padding: 0.3rem;
  border-radius: 10px;
  opacity: 0.6;
  margin-top: 1rem;
`;

const P = styled.p`
  align-self: center;
  color: white;
  margin-right: 0.3rem;
`;
