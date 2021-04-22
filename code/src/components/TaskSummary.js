import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import todos from "../reducers/todos"

const Summary = styled.div`
  font-family: "WrittenLies";
  color: #2C2E73;
`

const TaskSummary = () => {
  const allTasks = useSelector(store => store.todos.items)

  const uncompletedTasks = allTasks.filter(item => item.isComplete === false).length

  return (
    <Summary>
      <p>{uncompletedTasks} of {allTasks.length} left!</p>
    </Summary>
  )
}

export default TaskSummary