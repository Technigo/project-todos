import React from "react"
import { useSelector } from "react-redux"
import { tasks } from "reducers/tasks"
import styled from "styled-components"

export const TodoSummary = (state) => {
  const items = useSelector((state) => state.tasks.items)
  const unCompleted = items.filter(item => !item.checkedTask)

  return (

    <>

      <p>I have {items.length} tasks in my list.</p>
      <p>Of these, {unCompleted.length} {unCompleted.length === 1 ? "is" : "are"} uncompleted</p>
      {/* If it's one item, it should be "is", if it's plural - are. */}

    </>
  )

}