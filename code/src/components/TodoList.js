import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'


const DeleteButton = styled.button`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  background-color: #ff3801;
  color: #fff; 
  font-size: 22px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`

const TodoList = () => {
  const tasks = useSelector(store => store.todos.tasks)

  const dispatch = useDispatch()

  return (
    <div className='todo-list'>
      {tasks.map(task => (
        <div className='task-item' key={task.id}>
          <div>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(task.id))}
            />
            <span className='task-description' key={task.id}>{task.description}</span>
          </div>
          <div>
            <DeleteButton>-</DeleteButton>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList