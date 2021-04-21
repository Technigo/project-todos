import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'

import todo from '../reducers/todo'

const TodoForm = () => {
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState("")
  const [deadline, setDeadline] = useState("")
  const [visible, setVisible] = useState(false)

  const onTaskAdd = (event) => {
    setNewTask(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    const newToDo = {
      id: uniqid(),
      description: newTask,
      isComplete: false,
      dateCreated: Date.now(),
      deadline: deadline
    }
    dispatch(todo.actions.addItem(newToDo))
    setNewTask("")
    setDeadline("")
  }

  return (
    <div className="form-container">
      <button
        onClick={() => setVisible(!visible)}
      >
        {visible ? 'close' : '+ Add'}
      </button>
      <form onSubmit={onSubmit} className={`form ${visible && 'visible'}`} >
        <input
          type="text"
          value={newTask}
          onChange={onTaskAdd}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit"> Add </button>
      </form>
    </div>
  )

}

export default TodoForm