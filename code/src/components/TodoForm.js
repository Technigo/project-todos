import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'
import { Fab } from '@material-ui/core'
import { Add, Close, Schedule } from '@material-ui/icons'
import todo from '../reducers/todo'

const TodoForm = () => {
  const dispatch = useDispatch()

  const iconStyle = {
     color: "#596267", 
     marginRight: "3px",
     fontSize: "16px"
  }
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
        />
        <label htmlFor="date-picker" className="date-label">
          <Schedule style={iconStyle} />
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
        <button className="submit-button" type="submit"> Add </button>
      </form>
    </div>
  )

}

export default TodoForm