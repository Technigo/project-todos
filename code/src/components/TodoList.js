import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Draggable from 'react-draggable'

import todos from '../reducers/todos'

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks)
  const dispatch = useDispatch()

  return (
    <Draggable>
    <DraggableBox>
      {tasks.map(task => (
        <div key={task.id}>
          <h2>{task.description}</h2>
          <input
            type="checkbox"
            checked={task.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(task.id))}
          />
          <button onClick={() => dispatch(todos.actions.removeTask(task.id))}>
            Delete
          </button>
        </div>
      ))}
    </DraggableBox>
    </Draggable>
  )

}

//Style



const DraggableBox = styled.div`
  Background-color: pink;
`

export default TodoList