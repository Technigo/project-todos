/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';

const Label = styled.label`
    display: block;
    width: 300px;
    border: pink dotted 2px;
    text-align: center;
    margin: auto;
    background-color: whitesmoke;
`

export const TaskList = () => {
  const allTasks = useSelector((store) => store.tasks)
  return (
    <div>
      {allTasks.map((task) => (
        <Label>
          <input type="checkbox" />
          {task.text}
        </Label>
      ))}
    </div>
  )
}