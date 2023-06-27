import React from 'react'
import styled from 'styled-components'
import TaskList from './TaskList'
import AddTask from './AddTask'

const AllTasks = () => {
  return (
    <AllTasksStyled>
      <TaskList />
      <AddTask />
    </AllTasksStyled>
  )
}

export default AllTasks

const AllTasksStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
`