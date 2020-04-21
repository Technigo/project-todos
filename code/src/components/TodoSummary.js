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
      <Title color='#888'>In my list I have {tasks.length} todos.</Title>
      <Subtitle color='#888'>I have {tasksDone} things left todo.</Subtitle>
    </Container>
  )
}