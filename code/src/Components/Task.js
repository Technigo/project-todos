import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../Reducers/todos";
import { Checkbox } from "./Checkbox";

export const Task = ({ id, isComplete, description }) => {
  const dispatch = useDispatch();

  return (
    <Label
      htmlFor={id}
      style={isComplete ? { color: "rgb(196, 232, 241)" } : { color: "grey" }}
    >
      <Checkbox
        id={id}
        type="task"
        className="task"
        checked={isComplete}
        onChange={() => dispatch(todos.actions.toggleComplete({ id: id }))}
      />
      <Text>{description}</Text>
    </Label>
  );
};

const Label = styled.label`
  margin-left: 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  max-width: 100%;
`;

const Text = styled.span`
  margin-left: 20px;
`;
