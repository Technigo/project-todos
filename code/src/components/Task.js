import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import moment from 'moment'
import styled from "styled-components";


export const Task = ({ task }) => {
  const dispatch = useDispatch()

  if (task.display) {
    return (
      <TaskContainer>
        <TaskText task={task}>
          <Input
            type="checkbox"
            onChange={() => {
              dispatch(
                tasks.actions.doneTask(task.id))
            }}
            checked={task.complete}
          />
          {task.text}</TaskText>

        <Date>{moment(task.date).fromNow()}</Date>
        <Remove type="button" onClick={() => {
          dispatch(
            tasks.actions.removeTask(task.id))
        }}>[–]</Remove>
      </TaskContainer>
    )
  } else return <></>
}

const TaskContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const TaskText = styled.label`
  display: flex;
  font-size: 24px;
  margin: 0;
  margin-right: 10px;
  cursor: pointer;

  ${({ task }) => task.complete && `
    color: #bbb;
    // text-decoration: line-through;
    transition: 0.1s;
  `}

  @media (max-width: 668px) {
  }
`;

const Input = styled.input`
  appearance: none;
  margin-right: 10px;
  height: 23px;
  width: 23px;
  position: relative;
  border: 1px solid #000;
  border-radius: 50%;
  transition: 0.1s;
  background-color: none;
  cursor: pointer;


  &::after {
      position: absolute;
      content: '';
      border: solid #000;
      border-width: 0 1px 1px 0;
      transition: 0.1s;
      top: 2px;
      left: 6px;
      height: 13px;
      width: 7px;
      transform: rotate(30deg);
      opacity: 0;
    }

  &:checked {
    border: 1px solid #ccc;
    &::after {
      opacity: 1;
      border: solid #ccc;
      border-width: 0 1px 1px 0;
    }
  }

  &:focus {
    border: 1px solid #000;
    box-shadow: 0 0 2px 2px #bbb;
    outline: none;
    &::after {
      border: solid #000;
      border-width: 0 1px 1px 0;
    }
  }
`;


const Date = styled.span`
  font-size: 12px;
  color: #bbb;
  margin-top: 3px;

`;

const Remove = styled.a`
  font-size: 12px;
  cursor: pointer;
  margin-left: 5px;
  margin-top: 3px;
  color: #bbb;

  &:hover {
    color: black;
  }
`;
