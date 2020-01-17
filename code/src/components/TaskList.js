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
      {allTasks.length === 0 &&
        <NoTasks>Yay! You don't have any todos <span role='img' aria-label='yay'>✌️</span></NoTasks>
      }

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
  padding-bottom: 10px;
`
const NoTasks = styled.div`
  font-size: 16px;
  color: #999;
  display: flex;
  justify-content: center;
  padding: 30px;
`