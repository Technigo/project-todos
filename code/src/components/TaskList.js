import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

import { Header } from './Header'
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
  width: 80%;
  background-color: orange;
`

export const TaskList = () => {

  const task = useSelector (
    (state) => state.tasks
  )

  console.log(task) //remove later

  return (
    <Section>
      <Header />
      <TasksContainer>
        {task.map(task => {
          return (
            <Task
              key={task.id}
              {...task}
            />
          )
        })}
      </TasksContainer>
      <Footer />
    </Section>
  )
}