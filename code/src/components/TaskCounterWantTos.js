/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';

const TaskCounterWantTos = () => {
/*   const dispatch = useDispatch() */
  // Defining "items" in which we're calling a function, and inside the parenthesis, we're giving another function.
  // "items" is the list of todo items.
  const items = useSelector((store) => store.tasksWants.items)
  const countDone = () => {
    // Function which counts and returns the number of "done" items.
    const doneItems = items.filter((item) => item.complete === true)
    return doneItems.length
  }
  return (
    <TaskCounterStyling>
      <p>{countDone()} out of {items.length} tasks completed</p>
    </TaskCounterStyling>
  )
}

export default TaskCounterWantTos

const TaskCounterStyling = styled.p`
color: white;
`
