import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {todoStore} from '../reducers/todoStore'

export const TaskList = () => {
  const allTasks = useSelector((state)=>state.todoStore.todos)
  const dispatch = useDispatch()


const emptyArr = []
console.log("emptyArr", emptyArr.length)
const handleStatusChange = (todo) => {
    dispatch(todoStore.actions.statusTask(todo))
  }
const handleDelete = (todo) => {
  dispatch(todoStore.actions.removeTask(todo))
}

  return (
    <section>
      <h1>Todo List</h1>
      <p>{allTasks.length}</p>
      {allTasks.map((task)=>{

      return(<div><p>{task.task}</p>
            <p> {task.id} </p>
{task.done ? <p>you are done</p> : <p>do your job</p>}
<button onClick={(event)=>{event.preventDefault(); handleStatusChange(task)}}>change status</button>
<button onClick={(event)=>{event.preventDefault(); handleDelete(task)}}>deletoo</button>
</div>
)
      }
      )}
    
    </section>
  )
}
// Clear all