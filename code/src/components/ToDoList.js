import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

const ToDoList = () => {
  const items = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  return (
    <TodoContainer>
      {items.map((task) => (
        <article key={task.id} className="todo">
          <input
            id={task.id}
            className="checkbox"
            type="checkbox"
            checked={task.isComplete}
            onChange={() => dispatch(tasks.actions.toggleTodo(task.id))}
          />
          <div className="todoListContainer">
            <label htmlFor={task.id}>{task.description}</label>
          </div>
          <button onClick={() => dispatch(tasks.actions.removeTask(task.id))}>
            X
          </button>
        </article>
      ))}
    </TodoContainer>
  )
}

export default ToDoList

const TodoContainer = styled.article`
  margin: 30px;
  padding: 40px;
`
