import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks)
  const dispatch = useDispatch()

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <AwesomeHeadline>{task.description}</AwesomeHeadline>
          <input
            type="checkbox"
            checked={task.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(task.id))}
          />
        </div>
      ))}
    </div>
  )

}

//Style

const AwesomeHeadline = styled.h1`
    font-family: 'Faune';
`

export default TodoList