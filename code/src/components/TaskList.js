import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from 'components/Task'
import styled from 'styled-components'


export const TaskList = () => {
  const allTasks = useSelector((state) => state.tasks.items)

  return (
    <List>
      {allTasks.map((taskName) => (
        <Task key={taskName.id} taskName={taskName} />
      ))}
    </List>
  )
}

const List = styled.ul`
  flex-direction: row;
  align-items: baseline;
  padding-right: 10;
  padding-bottom: 5;
  margin-top: 20px; 
  background: transparent;
  font-size: 25px;
  width: 100%; 
`