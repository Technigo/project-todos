import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../../Reducers/todos";
import { Checkbox } from "../Selects/Checkbox";

export const Task = ({ id, isComplete, description, createdAt }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Text> {createdAt}</Text>
      <TaskContainer>
        <Label
          htmlFor={id}
          style={
            isComplete ? { color: "rgb(196, 232, 241)" } : { color: "grey" }
          }
        >
          <Checkbox
            id={id}
            type="task"
            className="task"
            checked={isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete({ id: id }))}
          />
          <TaskText>{description}</TaskText>
        </Label>
      </TaskContainer>
    </>
  );
};

const Label = styled.label`
  margin-left: 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  width: 100%;
`;

const TaskText = styled.span`
  float: right;
  width: 85%;
  margin-top: 5px;
`;

const Text = styled.p`
  padding: 5px 10px;
  margin: 0;
  text-align: right;
  background-color: rgb(137, 177, 187);
  color: white;
`;

const TaskContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  min-height: 100px;
  border-bottom: dashed rgb(196, 232, 241) 0.5px;
  font-size: 20px;
`;
