import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import dayjs from 'dayjs'

import Task from "./Task"

const TaskSection = styled.section`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: scroll;
`

const NoTasksMessage = styled.p`
  margin: 0;
  font-size: 20px;
`

const TaskContainer = () => {
  const tasks = useSelector((store) => store.tasks.allTasks)
  const filter = useSelector((store) => store.tasks.filter)

  const completedTasks = tasks.filter(task => task.isCompleted)
  const unCompletedTasks = tasks.filter(task => !task.isCompleted)
  const soonDueTasks = tasks.filter(task => !dayjs(task.dueDate).isSameOrBefore(new Date()))
  const overdueTasks = tasks.filter(task => dayjs(task.dueDate).isSameOrBefore(new Date()))

  return (
    <TaskSection>

      {!filter &&
        tasks.map(task =>
          <Task key={task.id} task={task} />
        )}

      {(!filter && tasks.length === 0) &&
        <NoTasksMessage>It looks like your to do list is empty. Why don't you add a new task?</NoTasksMessage>}

      {filter === "completed" &&
        completedTasks.map(task =>
          <Task key={task.id} task={task} />
        )}

      {(filter === "completed" && completedTasks.length === 0) &&
        <NoTasksMessage>There are no results that match this filter. Try another one!</NoTasksMessage>}

      {filter === "uncompleted" &&
        unCompletedTasks.map(task =>
          <Task key={task.id} task={task} />
        )}

      {(filter === "uncompleted" && unCompletedTasks.length === 0) &&
        <NoTasksMessage>There are no results that match this filter. Try another one!</NoTasksMessage>}

      {filter === "due soon" &&
        soonDueTasks.map(task =>
          <Task key={task.id} task={task} />
        )}

      {(filter === "completed" && soonDueTasks.length === 0) &&
        <NoTasksMessage>There are no results that match this filter. Try another one!</NoTasksMessage>}

      {filter === "overdue" &&
        overdueTasks.map(task =>
          <Task key={task.id} task={task} />
        )}

      {(filter === "completed" && overdueTasks.length === 0) &&
        <NoTasksMessage>There are no results that match this filter. Try another one!</NoTasksMessage>}

    </TaskSection>
  )
}

export default TaskContainer