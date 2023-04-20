// src/components/TaskCounter.js
import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'

const TaskCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  font-weight: bold;
`;

const TaskCounter = () => {
  const tasks = useSelector((state) => state.tasks)

  const uncompletedCount = tasks.filter((task) => !task.complete).length

  return (
    <TaskCounterContainer>
      <div>
        <p>Uncompleted tasks: {uncompletedCount}</p>
      </div>
    </TaskCounterContainer>
  )
}

export default TaskCounter
