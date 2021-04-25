import React, { useState } from "react"
import { useDispatch } from "react-redux"
import uniqid from "uniqid"
import { TextField, Button } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

import todoList from "../reducers/todoList"


//we use local state here since no other component needs this input until submit

const TaskForm = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (value.length < 3) {
      alert("Task names must be at least 3 characters long. Please enter a longer task name.")
    } else if (value.length > 2) {
      const newTask = {
        id: uniqid(),
        description: value,
        isComplete: false,
      }
      dispatch(todoList.actions.addTask(newTask))
    }
    setValue("")
  }

  return (
    <form 
      className="new-task-wrapper"
      onSubmit={onFormSubmit}
    >
      <div className="new-task-text">
        <TextField
          id="outlined-basic"
          color="secondary"
          label="New Task"
          variant="outlined"
          type="text"
          margin="dense"
          multiline={true}
          fullWidth
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div className="new-task-submit">
        <Button
          size="medium"
          type="submit" 
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
        >
          ADD
        </Button>
      </div>
    </form>
  )
}

export default TaskForm