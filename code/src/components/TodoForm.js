import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import todo from '../reducers/todo'

const TodoForm = () => {
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState("")
  const onTaskAdd = (event) => {
    setNewTask(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todo.actions.addItem({id: Date.now(), description: newTask, isComplete: false}))
  }
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={newTask}
          onChange={onTaskAdd}
        />
        <button type="submit"> Add </button>
      </form>
    
    </div> 
  )

}

export default TodoForm