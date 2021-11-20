import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import tasks, { selectFilteredTodos } from "../reducers/tasks";
import moment from "moment";

const ToDoList = () => {
  const items = useSelector((store) => selectFilteredTodos(store));

  const dispatch = useDispatch();

  const onToggleTask = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  };

  const onClickCompleteAll = () => {
    dispatch(tasks.actions.completeAllTodos());
  };

  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  };

  return (
    <ToDoContainer>
      {items.map((item) => (
        <div key={item.id}>
          <TasksContainer>
            <InfoContainer>
              <Task>{item.text}</Task>
              <Date>{moment().format("L")}</Date>
            </InfoContainer>
            <IconsContainer>
              <Label>
                <Input
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => onToggleTask(item.id)}
                />
                <Indicator />
              </Label>

              <DeleteButton onClick={() => onDeleteTask(item.id)}>
                <i className="fas fa-times-circle fa-lg"></i>
              </DeleteButton>
            </IconsContainer>
          </TasksContainer>
        </div>
      ))}
      <ButtonsContainer>
        <CompleteButton
          disabled={items.length < 1}
          onClick={onClickCompleteAll}
        >
          Complete all!
        </CompleteButton>
        <EmptyTasks
          onClick={() => {
            dispatch(tasks.actions.emptyList());
          }}
        >
          Empty List
        </EmptyTasks>
      </ButtonsContainer>
    </ToDoContainer>
  );
};

export default ToDoList;

const ToDoContainer = styled.section`
  width: 70%;

  @media (min-width: 1025px) {
    width: 60%;
  }
`;

const TasksContainer = styled.div`
  border: 1px solid #2f8c85;
  margin: 5% 0;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  @media (min-width: 668px) and (max-width: 1024px) {
    padding: 5px 30px;
  }
`;

const Task = styled.p`
  font-size: 18px;
  color: #49586e;
  word-wrap: wrap;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 25px;
  }
`;

const Date = styled.p`
  font-size: 12px;
  color: #49586e;
  margin-top: 10%;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 18px;
    margin-top: 6%;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
`;

const DeleteButton = styled.button`
  border: none;
  background-color: #d7f0ed;
  color: #2f8c85;
  &:hover {
    color: #d7f0ed;
    background-color: #2f8c85;
  }
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 25px;
  }
`;

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

// -- checkbox styling
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
  background: #e1f1f6;
  position: absolute;
  top: 0em;
  border: 1px solid #2f8c85;
  border-radius: 0.2em;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }
  ${Label}:hover & {
    background: #2f8c85;
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
    border: solid #2f8c85;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
  &::disabled {
    cursor: not-allowed;
  }

  @media (min-width: 668px) and (max-width: 1024px) {
    width: 1.5em;
    height: 1.5em;

    ${Input}:checked + &::after {
      left: 0.35em;
      width: 40%;
    }
  }
`;

// -- buttons
const CompleteButton = styled.button`
  color: #2f8c85;
  font-size: 14px;
  background-color: #d7f0ed;
  border: 2px solid #2f8c85;
  &:hover {
    color: #d7f0ed;
    background-color: #2f8c85;
  }

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 22px;
    padding: 5px 15px;
  }
`;

const EmptyTasks = styled.button`
  color: #2f8c85;
  font-size: 14px;
  background-color: #d7f0ed;
  border: 2px solid #2f8c85;
  &:hover {
    color: #d7f0ed;
    background-color: #2f8c85;
  }

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 22px;
    padding: 5px 15px;
  }
`;
