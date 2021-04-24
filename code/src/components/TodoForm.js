import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'
import { Fab } from '@material-ui/core'
import { Add, Close, Schedule } from '@material-ui/icons'

import todo from '../reducers/todo'

const TodoForm = () => {
  const [newTask, setNewTask] = useState("")
  const [deadline, setDeadline] = useState("")
  const [visible, setVisible] = useState(false)
  const [category, setCategory] = useState("")
  const dispatch = useDispatch()

  const iconStyle = {
    color: "#596267",
    marginRight: "3px",
    fontSize: "16px"
  }
  
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
      deadline: deadline,
      isPriority: false,
      category 
    }
    dispatch(todo.actions.addItem(newToDo))
    setNewTask("")
    setDeadline("")
    setCategory("")
  }

  return (
    <div className="form-container">
      <div className="fab-button">
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setVisible(!visible)}
        >
          {visible ? <Close /> : <Add />}
        </Fab>
      </div>
      <form onSubmit={onSubmit} className={`form ${visible && 'visible'}`} >
        <input
          className="text-input"
          type="text"
          value={newTask}
          onChange={onTaskAdd}
          placeholder="✎ Write here ..."
          required
        />
        <label htmlFor="date-picker" className="date-label">
          <Schedule style={iconStyle} aria-label="schedule icon"/>
          Set the deadline (optional)
        </label>
        <input
          id="date-picker"
          className="date-input"
          type="date"
          placeholder="yyyy-mm-dd"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <div className="calendar-container">
        </div>
        <select
          required
          className="selector"
          value={category}
          onChange={(event)=> setCategory(event.target.value)}
        >
        <option value="" disabled>Select category</option> 
        <option value="Home">Home</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
      </select>


        <button className="submit-button" type="submit"> Add </button>
      </form>
    </div>
  )
}
export default TodoForm