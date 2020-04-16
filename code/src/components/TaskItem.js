import React from 'react'
import { useDispatch } from 'react-redux'
import {todoStore} from '../reducers/todoStore'

export const TaskItem = ({todo}) => {
const dispatch = useDispatch()

const handleStatusChange = () => {
    dispatch(todoStore.actions.statusTask(todo))
  }
const handleDelete = () => {
  dispatch(todoStore.actions.removeTask(todo))
}

  return (
    <div>      
     <p>{todo.task}</p>
            <p> {todo.id} </p>
<p>{todo.taskDone ? "you are done": "do your job"}</p>
<button onClick={ handleStatusChange}>change status</button>
<button onClick={handleDelete}>deletoo</button>
    </div>
  )
}

//Add a due date to a task