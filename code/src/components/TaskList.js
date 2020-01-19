import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { TaskItem } from 'components/TaskItem'
import done from 'assets/done.png'

export const TaskList = () => {

  const allTasks = useSelector((store) => store.tasks.items)

  const tasksCompleted = allTasks.filter(task => (task.completed === true))
  const tasksNotCompleted = allTasks.filter(task => (task.completed === false))

  return (
    <TasksWrapper>
      {allTasks.length === 0 &&
        <>
          <NoTasks>Yay - you don't have any todos!</NoTasks>
          <NoTasksImg src={done} alt='No todos' />
        </>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const NoTasks = styled.div`
  font-size: 16px;
  color: #999;
  text-align: center;
  padding: 30px;
`
const NoTasksImg = styled.img`
  width: 50%;
  margin: 0 auto;
`