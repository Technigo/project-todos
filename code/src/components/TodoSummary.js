import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'lib/Container'
import { Title, Subtitle } from 'lib/Text'


export const TodoSummary = () => {
  const tasks = useSelector((state) => state.todos.items)
  const tasksDone = tasks.filter((task) => task.taskComplete === true).length
  console.log(tasksDone)
  return (
    <Container>
      <Title>In my list I have {tasks.length} todos.</Title>
      <Subtitle>I have {tasksDone} todos left todo.</Subtitle>
    </Container>
  )
}