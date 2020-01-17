import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { TaskItem } from 'components/TaskItem'

export const TaskList = () => {

  const allTasks = useSelector((store) => store.tasks.items)

  // Add filter for showing just completed or uncompleted?
  const tasksCompleted = allTasks.filter(task => (task.completed === true))
  const tasksNotCompleted = allTasks.filter(task => (task.completed === false))


  return (

    <TasksWrapper>
      {tasksNotCompleted.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}

      {tasksCompleted.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TasksWrapper>
  )

}

const TasksWrapper = styled.section`
  background: #fff;
`