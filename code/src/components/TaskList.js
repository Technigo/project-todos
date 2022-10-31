import React from 'react';
import styled from 'styled-components/macro'

const tasks = [
  {
    id: 1,
    action: 'hard coded tasks'
  },
  {
    id: 2,
    action: 'Create Store'
  },
  {
    id: 3,
    action: 'Styled Components'
  }
]

const TaskList = () => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <TaskListContainer>
            <input
              type="checkbox"
              id={task.id}
              value={task.action} />
            <label htmlFor={task.id}>{task.action}</label>
          </TaskListContainer>
        )
      })}
    </>
  )
}

export default TaskList;

const TaskListContainer = styled.div`
  background-color: grey;
`