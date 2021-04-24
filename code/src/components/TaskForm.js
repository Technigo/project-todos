import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import { Icon } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';

import todoList from '../reducers/todoList'


//we use local state here since no other component needs this input until submit

const TaskForm = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  //not handleSubmit since this happens HERE and not in a parent


  const onFormSubmit = (e) => {
    e.preventDefault();

    if (value.length < 3) {
      alert("You need to input text to save")
    } else if (value.length > 2) {
      const newTask = {
        id: uniqid(),
        description: value,
        isComplete: false,
        //date: moment().format('LLLL')
        // date: Date.now(),
        // fromNow: moment().add(3, 'days').calendar(),
        // addDue: false
      }

      dispatch(todoList.actions.addTask(newTask));
    }

    setValue(''); // By writing this we clear are input after sending input
  }

  return (
    <form 
      className="new-task-wrapper"
      onSubmit={onFormSubmit}
    >
      <div className="new-task-text">
        <TextField
          // classes={{width: "test"}}
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
          startIcon={<AddIcon></AddIcon>}
        >
          ADD
        </Button>
      </div>
    </form>
  )
}

{/* <input
                type={'text'}
                value={value}
                onChange={e => setValue(e.target.value)}
            /> */}

export default TaskForm