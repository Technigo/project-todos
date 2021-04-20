import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import { Task } from "./Task"

const TaskSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  overflow-y: scroll;
`

const NoTasksMessage = styled.p`
  margin: 0;
  font-size: 24px;
`

export const TaskContainer = () => {
  const tasks = useSelector((store) => store.tasks.allTasks)
  const isFiltered = useSelector((store) => store.tasks.isFiltered)

  return (
    <TaskSection>
      {(!isFiltered && tasks.length === 0) && <NoTasksMessage>It looks like your to do list is empty. Why don't you add a new task?</NoTasksMessage>}

      {(isFiltered && tasks.filter(task => !task.isHidden).length === 0) && <NoTasksMessage>There are no results that match this filter. Try another one!</NoTasksMessage>}

      {tasks.length > 0 &&
        tasks.filter(task => !task.isHidden).map(task => (
          <Task key={task.id} task={task} />
        ))}
    </TaskSection>
  )
}