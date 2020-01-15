import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { TaskItem } from 'components/TaskItem'

export const TaskList = () => {

  const allTasks = useSelector((store) => store.tasks.items)

  return (

    <TasksWrapper>
      {allTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TasksWrapper>
  )

}

const TasksWrapper = styled.section`
  background: #fff;
`