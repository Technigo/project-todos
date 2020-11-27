import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

import { Header } from './Header'
import { Task } from './Task'
import { AddTask } from './AddTask'
import { Footer } from './Footer'
import { NoTasks } from './NoTasks'

import { CustomCheckbox } from './CustomCheckbox'

// STYLING
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 10px 5px 38px -6px rgba(0,0,0,0.49);
  padding: 30px;
  margin: 30px 0;
  max-width: 90vw;
  min-width: 20vw;

  @media (min-width: 768px) {
    padding: 40px;
    margin: 40px 0;
  }

  @media (max-width: 280px) {
    padding: 20px;
    margin: 20px;
  }
`
const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`
// END OF STYLING

export const TaskList = () => {

  const items = useSelector (
    (store) => store.tasks.items
  )

  return (
    <Section>
      <Header />
      {items.length === 0 ? <NoTasks /> : 
      <TasksContainer>
      {items.map(task => {
        return (
          <Task
            key={task.id}
            task={task}
          />
        )
      })}
      </TasksContainer>}
      <AddTask />
      <Footer />
      <CustomCheckbox />
    </Section>
  )
}