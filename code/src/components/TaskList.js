import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

import { Header } from './Header'
import { AddTask } from './AddTask'
import { Task } from './Task'
import { Footer } from './Footer'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 10px 5px 38px -6px rgba(0,0,0,0.49);
  padding: 40px;
  margin: 40px 0;
  max-width: 1000px;
`

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

export const TaskList = () => {

  const items = useSelector (
    (store) => store.tasks.items
  )

  console.log(items) //remove later

  return (
    <Section>
      <Header />
      <TasksContainer>
        {items.map(task => {
          return (
            <Task
              key={task.id}
              task={task}
            />
          )
        })}
      </TasksContainer>
      <AddTask />
      <Footer />
    </Section>
  )
}