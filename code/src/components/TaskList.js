import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

import { Header } from './Header'
import { AddTask } from './AddTask'
import { Task } from './Task'
import { Footer } from './Footer'

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 20px 20px 20px;
  width: 80%;
  background-color: orange;
`

export const TaskList = () => {

  const items = useSelector (
    (store) => store.tasks.items
  )

  console.log(items) //remove later

  return (
    <Section>
      <Header />
      <AddTask />
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
      <Footer />
    </Section>
  )
}