import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import moment from 'moment'
import styled from "styled-components";
import { ButtonBracket } from 'elements/Buttons';
import { Checkbox } from 'elements/Checkbox';


export const Task = ({ task }) => {
  const dispatch = useDispatch()

  if (task.display) {
    return (
      <TaskContainer>
        <TaskText task={task}>
          <Checkbox
            type="checkbox"
            role="checkbox"
            onChange={() => {
              dispatch(
                tasks.actions.doneTask(task.id))
            }}
            checked={task.complete}
          />
          {task.text}</TaskText>

        <Date>{moment(task.date).fromNow()}</Date>
        <ButtonBracket type="button" onClick={() => {
          dispatch(
            tasks.actions.removeTask(task.id))
        }}>–</ButtonBracket>
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
`;

const Date = styled.span`
  font-size: 12px;
  color: #bbb;
  margin-top: 3px;

`;
