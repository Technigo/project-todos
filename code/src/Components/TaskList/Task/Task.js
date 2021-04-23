import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../../../Reducers/todos";
import { Checkbox } from "../../Selects/Checkbox";


export const Task = ({ id, isComplete, description, category}) => {
  const dispatch = useDispatch();
 const currentTime =  new Date(Date.now());

  return (
    <>
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
            onChange={() => dispatch(todos.actions.toggleComplete({ id: id, time: currentTime.toLocaleString()}))}
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
  width: 87%;
  margin-top: 5px;
`;


const TaskContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  min-height: 100px;
  border-bottom: dashed rgb(196, 232, 241) 0.5px;
  font-size: 20px;
`;


