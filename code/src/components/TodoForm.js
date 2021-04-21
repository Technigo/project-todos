import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'
import { Fab } from '@material-ui/core'
import { Add, Close } from '@material-ui/icons'
import todo from '../reducers/todo'
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import enLocale from "date-fns/locale/en-GB";

const TodoForm = () => {
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState("")
  const [deadline, setDeadline] = useState(new Date())
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
  }

  return (
    <div className="form-container">
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => setVisible(!visible)}
      >
        {visible ? <Close /> : <Add />}
      </Fab>
      <form onSubmit={onSubmit} className={`form ${visible && 'visible'}`} >
        <input
          type="text"
          value={newTask}
          onChange={onTaskAdd}
        />
        {/* <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        /> */}

        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale}>
          <DateTimePicker
            value={deadline}
            onChange={setDeadline}
            label="Pick the deadline"
          />
        </MuiPickersUtilsProvider>
        <button type="submit"> Add </button>
      </form>
    </div>
  )

}

export default TodoForm