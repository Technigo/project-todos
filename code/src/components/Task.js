import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import moment from 'moment'
import styled from "styled-components";


export const Task = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <div>
      {task.text} {task.display ? "" : "Hidden,"} {task.complete ? "Completed " : " "}
      <Date>{moment(task.date).fromNow()}</Date>

      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.doneTask(task.id))
      }}>Complete</button>
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.removeTask(task.id))
      }}>Remove</button>
    </div >
  )
}

const Date = styled.span`
  font-size: 12px;
`;