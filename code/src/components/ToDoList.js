import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

import tasks from "reducers/tasks";

const ToDoList = () => {
  const items = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onToggleTask = (id) => {
    dispatch(tasks.actions.toggleTasks(id));
  };

  return (
    <TodoContainer>
      {items.map((task) => (
        <TodoList key={task.id}>
          <CheckboxContainer>
            <Label>
              <Input
                type="checkbox"
                checked={task.isComplete}
                onChange={() => onToggleTask(task.id)}
              />
              <Indicator />
            </Label>
          </CheckboxContainer>
          <TodoTask isComplete={task.isComplete}>{task.description}</TodoTask>
          <DoneBtn onClick={() => dispatch(tasks.actions.removeTask(task.id))}>
            X
          </DoneBtn>
        </TodoList>
      ))}
    </TodoContainer>
  );
};

export default ToDoList;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5%;
`;

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;
const Label = styled.label`
  position: relative;
`;
const rotate = keyframes`
  from {
     opacity: 0;
     transform: rotate(0deg);
   }
   to {
     opacity: 1;
     transform: rotate(45deg);
   }
 `;

const Indicator = styled.div`
  width: 1em;
  height: 1em;
  position: absolute;
  margin: -9px 3px;
  border: 3px solid black;
  border-radius: 50%;

  ${Input}:not(:disabled):checked & {
    background: blue;
  }
  ${Label}:hover & {
    background: green;
  }
  &::after {
    content: "";
    position: absolute;
    display: none;
  }
  ${Input}:checked + &::after {
    display: block;
    top: 0em;
    left: 0.25em;
    width: 35%;
    height: 70%;
    border: solid #c77700;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
  &::disabled {
    cursor: not-allowed;
  }
`;

const TodoContainer = styled.article`
  margin: 30px;
  width: calc(100% - 20px);
`;

const TodoList = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  width: 90%;
  border-bottom: 3px solid black;
  margin: 15px 0px;
`;
const TodoTask = styled.h3`
  color: ${(props) => (props.isComplete ? "#064338" : "#c77700")};
  width: 80%;
  margin: 8px 10px 8px 30px;
  overflow-wrap: break-word;
`;

const DoneBtn = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0 5px 0 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-family: "rubik";
  font-size: 20px;
`;
