import React from 'react'
import { AddTask } from './AddTask'
import { ClearTasks } from './ClearTasks'
import { TaskList } from './TaskList'
import styled from 'styled-components'

export const Tasks = () => {

  const Container = styled.section`
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  `;

  return (
    <>
      <Container>
        <AddTask />
        <article>
          <TaskList />
          <ClearTasks />
        </article>
      </Container>
    </>
  )
}
