import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import todos from '../reducers/todos'


const DeleteButton = styled.button`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  background-color: #9c9c9c;
  color: #fff; 
  font-size: 22px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`

const Timestamp = styled.p`
  margin: 3px 0 0 30px;
  font-size: 10px;
  color: #767676;
`

const TodoList = () => {
  const tasks = useSelector(store => store.todos.tasks)
  console.log(tasks)

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
            <span className={task.isComplete === true ? 'task-description-done' : 'task-description'} key={task.id}>{task.description}</span>
            <Timestamp>added {moment(task.createdAt).startOf('hour').fromNow()}</Timestamp>
          </div>
          <div>
            <DeleteButton
              onClick={() => dispatch(todos.actions.deleteTask(task.id))}
            >
              -
            </DeleteButton>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList