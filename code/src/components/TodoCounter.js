import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'
import CheckMark from '../assets/icon_check.png'

export const TodoCounter = () => {
// export const TaskCounter = () => {
  const items = useSelector((store) => store.todo.items)

  const todoDone = items.filter((item) => (item.isCompleted))
  // const todoDone = items.filter((item) => (item = item.isCompleted))
  // const tasksDone

  const showTodoDone = () => {
  // const showTasksDone = (items) => {
    if (items.length > 0) {
      if (items.length === todoDone.length) {
        if (items.length > 1) {
          return `Well done! ${todoDone.length} of ${items.length} tasks are checked. Take a well deserved break or add some new tasks.`
        } else {
          return `Well done! ${todoDone.length} of ${items.length} task are checked. Take a well deserved break or add a new task.`
        }
      } else {
        return `TODO: ${todoDone.length} OF ${items.length} DONE`
      }
    } else {
      return 'Let`s get started by adding some tasks! ☝️'
    }
  }

  if (items.length === todoDone.length) {
    return <CounterTodo>{showTodoDone(items)}</CounterTodo>
  } else {
    return (
      <CounterTodo>
        {showTodoDone(items)}
        <img src={CheckMark} alt="done" />
      </CounterTodo>
    )
  }
}
// ------Styled Components -------

const CounterTodo = styled.p`
  font-family: var(--font-todo);
  font-weight: 300;
  font-size: 14px;
  border: 1px solid var(--clr-gray);
  align-self: flex-start;
  padding: 0.2em 0.4em;
  color: var(--clr-accent);
  max-width: 41ch;
  margin: 0.5em;
`;